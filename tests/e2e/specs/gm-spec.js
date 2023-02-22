describe('Wallet tests', () => {
        beforeEach(() => {
                cy.visit('/');
        });

        context('Connect metamask wallet', () => {
            it('should login and click on gm button', () => {
                cy.contains('Sign in').click();
                cy.contains('Metamask').click();
                cy.acceptMetamaskAccess({
                    signInSignature: true
                });
                cy.wait(5000);
                cy.get('body').then(($body) => {
                    if ($body.find('button:visible:contains("gm")').length) {
                            cy.get('button:visible').contains('gm').click();
                    }
                    cy.contains('gm streak').should('be.visible');
                });
            });
        });
});
