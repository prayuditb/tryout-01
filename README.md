# tryout-01

## TRYOUT 01 - Implementation Generator Yield,WebSocket, GraphQL
### Prayudi Tirta BAyu
### prayuditb@gmail.com


## How to run Program
### yield
  open your terminal, go to directory `yield` and run `node ReadFilename.js`
  
### graphql
  1. go to directory `/graphql/server/`
  2. run `npm install && node server.js`
  3. open another terminal, go to `graphql/client/Client/` and run your avd
  4. run 'npm install && react-native run-android'
  5. run 'react-native start' and click button reload on react native app on your avd
  6. click button `get image`
  NB: the image grabbed from graphql server
### graphql schema
```
var schema = buildSchema(`
  type Query {
    get_image: String
  }
`);
```
 
 ### Websocket
  1. go to directory `/websocket/server/`
  2. run `npm install && node server.js`
  3. open another terminal, go to `graphql/client/Client/` and run your avd
  4. run 'npm install && react-native run-android'
  5. run 'react-native start' and click button reload on react native app on your avd
  6. see your terminal server
  
  ### Screenshot
  
  #### GraphQL Client
  
  ![GraphQL client](https://github.com/prayuditb/tryout-01/blob/master/image/graphql_client.png "GraphQL Client")

  #### Web Socket Client
  
  ![Web Socker client](https://github.com/prayuditb/tryout-01/blob/master/image/websocket_client.png "Web Socket Client")


