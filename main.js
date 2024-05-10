const snarkjs = require("snarkjs");

async function main() {
    const r1cs = "rsc/Multiplier.r1cs";
    const ptau = "rsc/powersOfTau28_hez_final_08.ptau";
    const zkey = "rsc/Multiplier.zkey"

    await snarkjs.r1cs.info(r1cs, console);
    await snarkjs.zKey.newZKey(r1cs, ptau, zkey, console);
}

main()
    .then(() => console.log("no error"))
    .catch((err) => {
        console.log("error");
        console.error(err);
        process.exit(1);
    });
