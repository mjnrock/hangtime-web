import MessageManager from './MessageManager';

export default class AMessage {
	constructor(messageType, data) {
		this.Type = messageType;
		this.Data = data;
		this.Timestamp = Date.now();
	}

	Send(i) {
		MessageManager.GetInstance().Receive({
			i: i,
			...this
		});
	}
}