// mengambil tanggal

export const time = () => {
    const date = new Date();

    const currentDate = date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return currentDate;
}

// ngambil waktu
export function clock() {
    const date = new Date();
    return date.toLocaleTimeString('in-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

async function getWaktuLokalOtomatis() {
    if (!navigator.geolocation) throw new Error("Geolocation tidak tersedia.");

    const posisi = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const { latitude, longitude } = posisi.coords;

    // Ambil zona waktu berdasarkan lokasi IP (karena worldtimeapi tidak support lat/long langsung)
    const lokasiRes = await fetch(`https://worldtimeapi.org/api/ip`);
    const lokasiData = await lokasiRes.json();
    const zonaWaktu = lokasiData.timezone || 'Asia/Jakarta';

    // Ambil waktu lokal sesuai zona
    const now = new Date();
    const waktuLokal = now.toLocaleString('id-ID', {
        timeZone: zonaWaktu,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return waktuLokal;
}

export async function jam() {
    try {
        const waktu = await getWaktuLokalOtomatis();
        console.log("Waktu Lokal:", waktu);
    } catch (err) {
        console.error("Gagal:", err.message);
    }
}
