
export class Resp<T> {
    constructor(
        public ok: boolean,
        public data: T
    ){

    }
}