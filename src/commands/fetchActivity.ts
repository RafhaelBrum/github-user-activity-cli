import https from 'node:https';

export default function getData(url: string) {

    https.get(url,
        { headers: { 'user-agent': 'github-activity-cli' } },
        (res) => {
            // console.log('Status Code:', res.statusCode);
            // console.log('Headers:', res.headers);
            if (res.statusCode === 404) {
                console.log("User not found.");
                return
            }

            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
            })

            res.on('end', () => {
                try {
                    let json = JSON.parse(body);
                    if (!Array.isArray(json)) {
                        console.log("Invalid array")
                        return
                    }
                    json.forEach((event: any) => {
                        if (event.type === 'PullRequestEvent') {
                            console.log(`- ${ event.payload.action } a pull request in ${ event.repo.name }\n     at ${ event.created_at }\n`);
                        } else if (event.type === 'PushEvent') {
                            console.log(`- Pushed ${ event.payload.commits.length } commits in ${ event.repo.name }\n     at ${ event.created_at }\n`);
                        } else if (event.type === 'IssuesEvent') {
                            console.log(`- ${ event.payload.action } in ${ event.repo.name }\n     at ${ event.created_at }\n`);
                        } else if (event.type === 'WatchEvent') {
                            console.log(`- ${ event.payload.action } ${ event.repo.name }\n     at ${ event.created_at }\n`);
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