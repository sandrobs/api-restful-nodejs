module.exports = app => {

    const customerWalletDB = app.data.customerWallets;
    const controller = {};

    controller.listCW = (req, res) => res.status(200).json(customerWalletDB);

    return controller;

}