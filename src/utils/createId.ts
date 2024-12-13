import { nanoid } from 'nanoid';

export function createId(type: string = 'id') {
    return `${type}-${nanoid(25)}`;
};
