// @ts-nocheck
const server = Bun.serve<{ authToken: string }>({
    fetch(req, server) {
        const success = server.upgrade(req);
        if (success) {
            // Bun automatically returns a 101 Switching Protocols
            // if the upgrade succeeds
            return undefined;
        }

        // handle HTTP request normally
        return new Response([
            "bun-image",
            "Hello world!",
            (new Date()),
        ].join("\n"));
    },
    websocket: {
        // this is called when a message is received
        async message(ws, message) {
            console.log(`Received ${message}`);
            // send back a message
            ws.send(`You said: ${message}`);
        },
    },
});

console.log(`Listening on http://${server.hostname}:${server.port}`);