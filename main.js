//Moralis initialization
const serverUrl = "https://na9xpnhehmew.usemoralis.com:2053/server";
const appId = "RRA42KNb8t818QjsYE8qbnOgeeIEGeuSNEVLuUZg";
Moralis.start({ serverUrl, appId });

//Auth Code
async function login() {
    const user = await Moralis.authenticate({
        provider: "web3Auth",
        clientId: "BI19_nHrx1woABs3rjHRlpquTf269D9Fk29bzLc-YaAkHifLtNOhFo63VcZetqz-D-0mJ_TYZjaIFqz_RblsW1s",
        chainId: Moralis.Chains.BSC_MAINNET,
        loginMethodsOrder: ["google", "facebook", "twitter", "reddit", "discord", "twitch", "apple"]
    })
        .then(function (user) {
            console.log("logged in user:", user);
            document.getElementById("btn-login").innerHTML = (user.get("ethAddress"));
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;