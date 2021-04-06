export class UserRole {
    constructor(
        public id: number | null,
        public userId: number | null,
        public roleId: number | null ,
        public userName: string,
        public roleName: string )
    { }
}
