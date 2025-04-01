import https from 'node:https';

export default function getData(url: string) {

    https.get(url,
        { headers: { 'user-agent': 'github-activity-cli' } },
        (res) => {
            console.log('Status Code:', res.statusCode);
            if (res.statusCode === 404) {
                console.log("User not found.");
                return
            }
            // console.log('Headers:', res.headers);

            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
            })

            res.on('end', () => {
                try {
                    let json = JSON.parse(body);

                    json.forEach((event: any) => {
                        if (event.type === 'PullRequestEvent') {
                            console.log(`- ${ event.payload.action } a pull request in ${ event.repo.name }`);
                        } else if (event.type === 'PushEvent') {
                            console.log(`- Pushed ${ event.payload.commits.length } commits in ${ event.repo.name }`);
                        } else if (event.type === 'IssuesEvent') {
                            console.log(- `${ event.payload.action } in ${ event.repo.name }`);
                        } else if (event.type === 'WatchEvent') {
                            console.log(- `${ event.payload.action } ${ event.repo.name }`);
                        }

                    })
                    return json;
                } catch (e) {
                    console.error(e);
                    return;
                };
            });

        }).on('error', (e) => {
            console.error(e);
        });
}