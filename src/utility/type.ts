import { TypeKeys } from 'web-utility';

export type IDType = number | string;

export type DataObject = Record<string, any>;

export type NewData<T extends DataObject> = Omit<
    T,
    TypeKeys<T, DataObject> | TypeKeys<T, DataObject[]>
> & {
    [K in TypeKeys<T, DataObject>]: IDType;
} & {
    [K in TypeKeys<T, DataObject[]>]: IDType[];
};
