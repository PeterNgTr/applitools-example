const { I } = inject();

Feature('Applitools functionality');

Before(() => {
    I.amOnPage('https://applitools.com/helloworld');
});

Scenario('Check home page @test', async () => {
    await I.eyeCheck('Homepage');
});