import { by } from 'protractor';

export class PaginaLogin {
    private campoLogin = by.css('form.form > div:first-child > input.form-control');
    private campoSenha = by.css('form.form > div:nth-of-type(2) > input.form-control');
    private btnLogin = by.partialButtonText('login');

    public getCampoLogin(){
        return this.campoLogin;
    }
    public getCampoSenha(){
        return this.campoSenha;
    }
    public getBtnLogin(){
        return this.btnLogin;
    }
}