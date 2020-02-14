import { by } from 'protractor';

export class PaginaLogin {
    private campoLogin = by.formControlName('userName');
    private campoSenha = by.formControlName('password');
    private btnLogin = by.buttonText('login');
    private btnHome = by.className('fa-home');

    public getCampoLogin(){
        return this.campoLogin;
    }
    public getCampoSenha(){
        return this.campoSenha;
    }
    public getBtnLogin(){
        return this.btnLogin;
    }
    public getBtnHome(){
        return this.btnHome;
    }
}