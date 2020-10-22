import { upgradeElement } from '../main-thread/index';

const channel = new MessageChannel();

channel.port1.onmessage = (m) => console.log('p1', m);

// channel.port2.onmessage = (m)=>console.log("p2", m)

upgradeElement(document.getElementById('upgrade-me'), './dist/worker.mjs', channel);
