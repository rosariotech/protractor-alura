
import { browser } from 'protractor';
import { LoginComp } from '../components/login.comp';

let login = new LoginComp();

describe('Tela de Login: ', function () {

    beforeEach(() => {
        browser.get('/');
    });

    it('deve fazer login com sucesso', function () {
        login.fazerLogin(browser.params.login.user, browser.params.login.pass);
    });

});