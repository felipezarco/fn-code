interface IOptions {
    default: any;
}
interface ISwitchObject {
    case: (variable: any) => boolean;
    value: any;
}
declare function one(variable: any, switchObjectOrArray: object | ISwitchObject[] | undefined, options?: IOptions): any;
declare const fn: {
    one: typeof one;
    switch: typeof one;
};
export default fn;
