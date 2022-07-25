interface IOptions {
    default: any;
}
declare function one(variable: any, object: object | undefined, options?: IOptions): any;
declare const _default: {
    one: typeof one;
    switch: typeof one;
};
export default _default;
