export class UsuarioEntity{
private id:number
private nome:string
private email:string
private senha:string    
private criadoEm:Date
constructor(id:number,nome:string,email:string,senha:string,criadoEm:Date){
    this.id=id
    this.nome=nome
    this.email=email
    this.senha=senha
    this.criadoEm=criadoEm
}

public getId():number{
    return this.id  
}
public getNome():string{
    return this.nome
}
public getEmail():string{
    return this.email   
}
public getSenha():string{                    
    return this.senha   
}
public getCriadoEm():Date{
    return this.criadoEm
}

}