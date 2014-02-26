## Mezzy

Example WebRTC Chat app based on [PeerJS](https://github.com/peers/peerjs)   

Start the registration server (port 9000):

    node server

Start the HTTP server to serve up client files (port 9001):

    node client

Open browser to http://localhost:9001 from a couple of tabs. On each tab:

*   Enter local client name and click join
*   Click leave to unregister
*   Enter remote client name and click connect
*   Enter messages and click send
*   Click disconnect to end
*   Click video to start video stream
*   Click close to end video stream

![screen-shot](https://raw2.github.com/julianbrowne/mezzy/master/public/screen-shot.png)
