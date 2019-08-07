export class User {
    public name: string;
    public phone: number;
    public email:string;
    public dob: string;
    constructor(name: string, phone: number, email:string, dob: string) {
        this.name=name;
        this.phone=phone;
        this.email=email;
        this.dob=dob;
    }
}