class MessageQueue {
    private constructor(private messages: string[]) { }
}

// class BadQueue extends MessageQueue { }
// new MessageQueue([])

// final 클래스 흉내(상속x 인스턴스o)
class MessageQueue1 {
    private constructor(private messages: string[]) { }
    static create1(messages: string[]) {
        return new MessageQueue1(messages)
    }
}

// class BadQueue extends MessageQueue1{}
MessageQueue1.create1([])