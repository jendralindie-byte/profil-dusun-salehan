async function testDatabase() {

    const { data, error } = await supabaseClient
        .from("profil")
        .select("*");

    if (error) {
        console.error(error);
        return;
    }

    console.log("Berhasil Terhubung!");
    console.log(data);

}

testDatabase();