import { Exclude, plainToInstance } from "class-transformer";

export class User {
    id : number;
    name: string;

    @Exclude()
    password: string;
    displayName: string;
}

export const mockUsers: User[] = [
    {
        id: 1,
        name: 'John Doe',
        password: 'I4f7w',
        displayName: 'John'
    },
    {
        id: 2,
        name: 'Jane Smith',
        password: 'bP0dZ',
        displayName: 'Jane'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        password: 'lHm1o',
        displayName: 'Alice'
    },
]