
import { browser } from 'protractor';
import { LoginComp } from '../components/login.comp';
import { Inicio } from '../components/inicio.comp';
import { Helper } from '../../util/components/helper.comp';

let helper = new Helper();
let login = new LoginComp();
let inicio = new Inicio();

describe('Tela de Login: ', function () {
    afterEach(function(){
        helper.tiraPrint();
    })
    beforeEach(() => {
        browser.get('/');
    });

    it('deve fazer login com sucesso', function () {
        login.fazerLogin(browser.params.login.user, browser.params.login.pass);
        expect(inicio.retornaBotaoLogout().isDisplayed());
        expect(inicio.retornaBotaoMenu().isDisplayed());
        expect(inicio.retornaCampoBusca().isDisplayed());
    });
});