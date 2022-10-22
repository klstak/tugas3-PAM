const maskapai = {
    GA:{
        maskapai_id: "GI",
        maskapai_nama: "Garuda Indonesia",
    },
    WA:{
        maskapai_id: "WA",
        maskapai_nama: "Wings Air",
        
    },
    SA:{
        maskapai_id: "SA",
        maskapai_nama: "Seriwijaya Air",
        
    },
    LA:{
        maskapai_id: "LA",
        maskapai_nama: "Lion Air",   
    },
    NA:{
        maskapai_id: "NA",
        maskapai_nama: "NAM Air",
    },
    BA:{
        maskapai_id: "BA",
        maskapai_nama: "Batik Air",
    },
    CI:{
        maskapai_id: "CI",
        maskapai_nama: "Citilink",
    },
    AA:{
        maskapai_id: "AA",
        maskapai_nama: "Air Asia",
        
    },
};

const bandara = {
    SH:{
        bandara_kode: "SH",
        bandara_nama: "Soekarno Hatta",
    },
    SYK:{
        bandara_kode: "SYK",
        bandara_nama: "Sultan Syarif Kasim II",
    },
    RI:{
        bandara_kode: "RI",
        bandara_nama: "Radin Inten II",
    },
    KN:{
        bandara_kode: "KN",
        bandara_nama: "Kualanamu",
    },
    AY:{
        bandara_kode: "AY",
        bandara_nama: "Ahmad Yani",
    },
    NR:{
        bandara_kode: "NR",
        bandara_nama: "Ngurah Rai",
    },
    MK:{
        bandara_kode: "MK",
        bandara_nama: "Minagkabau",
    },
};

const jadwal = [
    {
        jadwal_id: "1",
        bandara_kode_keberangkatan: "SH",
        bandara_kode_tujuan: "SYK",
        maskapai_id: "AA"
    },
    {
        jadwal_id: "2",
        bandara_kode_keberangkatan: "SH",
        bandara_kode_tujuan: "RI",
        maskapai_id: "AA"
    },
    {
        jadwal_id: "3",
        bandara_kode_keberangkatan: "SYK",
        bandara_kode_tujuan: "RI",
        maskapai_id: "BA"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "SYK",
        bandara_kode_tujuan: "KN",
        maskapai_id: "CI"
    },
    {
        jadwal_id: "5",
        bandara_kode_keberangkatan: "RI",
        bandara_kode_tujuan: "KN",
        maskapai_id: "GI"
    },
    {
        jadwal_id: "6",
        bandara_kode_keberangkatan: "RI",
        bandara_kode_tujuan: "AY",
        maskapai_id: "WA"
    },
    {
        jadwal_id: "7",
        bandara_kode_keberangkatan: "KN",
        bandara_kode_tujuan: "AY",
        maskapai_id: "BA"
    },
    {
        jadwal_id: "8",
        bandara_kode_keberangkatan: "KN",
        bandara_kode_tujuan: "NR",
        maskapai_id: "SA"
    },
    {
        jadwal_id: "9",
        bandara_kode_keberangkatan: "AY",
        bandara_kode_tujuan: "NR",
        maskapai_id: "LA"
    },
    {
        jadwal_id: "10",
        bandara_kode_keberangkatan: "AY",
        bandara_kode_tujuan: "MK",
        maskapai_id: "NA"
    },
    {
        jadwal_id: "11",
        bandara_kode_keberangkatan: "NR",
        bandara_kode_tujuan: "MK",
        maskapai_id: "CI"
    },
    {
        jadwal_id: "12",
        bandara_kode_keberangkatan: "NR",
        bandara_kode_tujuan: "SH",
        maskapai_id: "AA"
    },
    {
        jadwal_id: "13",
        bandara_kode_keberangkatan: "MK",
        bandara_kode_tujuan: "SH",
        maskapai_id: "GI"
    },
    {
        jadwal_id: "14",
        bandara_kode_keberangkatan: "MK",
        bandara_kode_tujuan: "SYK",
        maskapai_id: "WA"
    },
    {
        jadwal_id: "15",
        bandara_kode_keberangkatan: "SH",
        bandara_kode_tujuan: "KN",
        maskapai_id: "SA"
    },
    {
        jadwal_id: "16",
        bandara_kode_keberangkatan: "SYK",
        bandara_kode_tujuan: "AY",
        maskapai_id: "LA"
    },
    {
        jadwal_id: "17",
        bandara_kode_keberangkatan: "RI",
        bandara_kode_tujuan: "NR",
        maskapai_id: "NA"
    },
    {
        jadwal_id: "18",
        bandara_kode_keberangkatan: "KN",
        bandara_kode_tujuan: "MK",
        maskapai_id: "BA"
    },
    {
        jadwal_id: "19",
        bandara_kode_keberangkatan: "MK",
        bandara_kode_tujuan: "SYK",
        maskapai_id: "CI"
    },
    {
        jadwal_id: "20",
        bandara_kode_keberangkatan: "KN",
        bandara_kode_tujuan: "SH",
        maskapai_id: "AA"
    },

];

export {
    maskapai, 
    bandara,
    jadwal,
};