# Engineer.AI Interview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Checking results
Once the developer server is running, open chrome dev tools and inspect the console.log.

## Adding additional blocks
To create additional blocks, open app.component.ts and instantiate a new block in ngOnInit() by passing aname and the message service. For example, const b4 = new Block('b4', this.messageService);

## Subscribing to a channel
After a new block has been created, it can subscribe to a channel by calling block.subscribe('Channel_Name'), where block is the block instance and Channel_Name is the channel to subscribe to. 

## Sending messages to a channel
After a new block has been created, it can send messages to a channel by calling block.sendMessage('Channel_Name', 'Message'), where Channel_Name is the channel to send to and message is the message itself. 


## Adding additional channels
In message.service.ts, update the messageChannels object with any additional channels you'd like to add. 


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

