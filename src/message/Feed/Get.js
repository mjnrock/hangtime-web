import AMessage from './../AMessage';
import MessageType from './../../enum/MessageType';

export class MessageGetFeed extends AMessage {
	constructor(payload) {
		super(MessageType.GET_FEED, payload);
	}
}