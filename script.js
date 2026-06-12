const whatsappNumber = "5493513743859";
    // GAME_PRICES_PLUS_10_APPLIED
    const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#39;" }[char]));
        // PS4
    const ps4Products = [
    {
        "name":  " Call of Duty®: Ghosts Edición Oro",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  47900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333550/COD_GHOST_1_micenv_muuyo3.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/347"
    },
    {
        "name":  "A Way Out",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  15500,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/A_WAY_OUT_izemem_p6cjf2.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/188"
    },
    {
        "name":  "Alien: Isolation",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  15200,
        "tag":  "-14%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289701/ALIEN_ISOLATION_u04pen_nzwig4.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/515"
    },
    {
        "name":  "Among Us",
        "platform":  "PS4",
        "genre":  "Fiesta",
        "price":  9600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/AMONG_US_pk7bzc_clskgy.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/197"
    },
    {
        "name":  "Assassin’s Creed® IV Black Flag™",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/ASSASSINS_CREED_BLACK_FLAG_q9qycu_a6akyb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/208"
    },
    {
        "name":  "Assassin’s Creed® Origins",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289700/AC_ORIGINS_gazymr_iw2fhe.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/455"
    },
    {
        "name":  "Assassin\u0027s Creed® Odyssey",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  25500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/ASSASINSCREED_ODYSSEY_vsrsoe_g9vsdu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/60"
    },
    {
        "name":  "Assassin\u0027s Creed® Valhalla",
        "platform":  "PS4",
        "genre":  "Aventura",
        "price":  25500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/VALHALLA_zxyskh_u9gm0q.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/22"
    },
    {
        "name":  "Assetto Corsa",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  16700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1767874470/ASETTO_CORSA_dhghin.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/500"
    },
    {
        "name":  "Back 4 Blood",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  12000,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/BACK_4_BLOOD_DELUXE_m5gkvi_dofren.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/212"
    },
    {
        "name":  "Batman: Arkham Collection",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  12800,
        "tag":  "-45%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BATMAN_ARKHAM_qrdhrp_qdmduk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/301"
    },
    {
        "name":  "Batman: Return to Arkham",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  12800,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BATMAN_RETURN_uce25w_ieterv.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/300"
    },
    {
        "name":  "Batman™: Arkham Knight",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  13500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BATMAN_ARKHAM_KNIGHT_ys8jdg_xrpwht.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/303"
    },
    {
        "name":  "Battlefield™ 1",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  12800,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BATTLEFIELD_1_k9x58c_lghuku.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/54"
    },
    {
        "name":  "Battlefield™ 1 Revolution",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  13500,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/BATTLEFIELD_1_REVOLUTION_esfaax_j3pqvs.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/445"
    },
    {
        "name":  "Battlefield™ 2042",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  19100,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BATTLEFIELD_2042_c6qyky_xobll6.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/51"
    },
    {
        "name":  "Battlefield™ V",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  19100,
        "tag":  "-14%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BATTLEFIELD_V_q6ezzk_lcqtcm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/53"
    },
    {
        "name":  "Battlefield™ V Definitive Edition",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BATTLEFIELD_V_DE_clx4ex_cas7o8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/52"
    },
    {
        "name":  "Bloodborne™",
        "platform":  "PS4",
        "genre":  "Acción ROL/RPG",
        "price":  21600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BLOODBORNE_vltzaj_e9l5yz.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/192"
    },
    {
        "name":  "Bloodborne™ Complete Edition Bundle",
        "platform":  "PS4",
        "genre":  "Acción ROL/RPG",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BLOODBORNE_CE_qptbmx_ibqj1r.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/55"
    },
    {
        "name":  "Borderlands 3",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  12000,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339530/BORDERLANDS_3_vmrkzu_cblwce.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/63"
    },
    {
        "name":  "Bully",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  16700,
        "tag":  "-16%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289702/BULLY_yubgdz_bfrvmt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/452"
    },
    {
        "name":  "Call of Duty®: Advanced Warfare Gold Edition",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1737110187/z5p1CPfhzrRxMWSN0k4V6ZGDvADYnh3x_kzjden.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/256"
    },
    {
        "name":  "Call of Duty®: Black Ops 4",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/COD_BO_4_qlcctd_a9ruqi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/248"
    },
    {
        "name":  "Call of Duty®: Black Ops 6 - Paquete Multigeneración",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  30400,
        "tag":  "-41%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339530/COD_BO_6_ivvdxq_mukh1c.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/59"
    },
    {
        "name":  "Call of Duty®: Black Ops 7 - Paquete Multigeneración",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  70200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289703/COD_BO_7_y2lncg_n3f15t.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/532"
    },
    {
        "name":  "Call of Duty®: Black Ops Cold War - Edición Estándar",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  34300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/COD_COLD_WAR_ophysm_gsxmlc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/196"
    },
    {
        "name":  "Call of Duty®: Black Ops Cold War Multigeneración",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  34300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/COD_COLD_WAR_CROSS_orhzbx_vlrrms.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/306"
    },
    {
        "name":  "Call of Duty®: Black Ops III - Zombies Chronicles Deluxe",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  67000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/COD_BO_3_ZOMBIES_npbaq6_pj6imm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/194"
    },
    {
        "name":  "Call of Duty®: Black Ops III - Zombies Chronicles Edition",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  31100,
        "tag":  "-9%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1733764820/cod_black_ops_3_helu7e.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/193"
    },
    {
        "name":  "Call of Duty®: Infinite Warfare",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/COD_INFINITI_1_vsakem_n7tl04.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/339"
    },
    {
        "name":  "Call of Duty®: Infinite Warfare - Legacy Edition",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  47100,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/COD_INFINITE_Y_MW_cenrnj_aih82a.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/346"
    },
    {
        "name":  "Call of Duty®: Modern Warfare III",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  43100,
        "tag":  "-18%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/COD_MW_3_u84l3a_fohsxb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/243"
    },
    {
        "name":  "Call of Duty®: Modern Warfare®",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  31100,
        "tag":  "-9%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/COD_MW_o77civ_fq6sc2.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/278"
    },
    {
        "name":  "Call of Duty®: Modern Warfare® II - Lote Multigeneración",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  43100,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1766366813/W5uSEsW7yefCNTHatS03v5q7.png_bshh5i.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/190"
    },
    {
        "name":  "Call of Duty®: WWII Gold Edition",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/COD_WW_II_jqsikm_pe0tug.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/172"
    },
    {
        "name":  "Captain Tsubasa: Rise of New Champions",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  21600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/CAPTAIN_SUBASA_mgjo3t_rpwsxu.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/174"
    },
    {
        "name":  "Captain Tsubasa: Rise of New Champions, Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  28700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289702/CAPTAIN_TSUBASA_DELUXE_ajyr3i_mpkgkx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/447"
    },
    {
        "name":  "Colección LEGO® Marvel",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  16000,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/LEGO_MARVEL_COLLECTION_dml45k_ladmrx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/164"
    },
    {
        "name":  "Core Keeper",
        "platform":  "PS4",
        "genre":  "Aventura ROL/RPG",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339530/CORE_KEEPER_c7ncrr_sea9ti.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/65"
    },
    {
        "name":  "Cuphead",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  27900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339530/CUPHEAD_n64tbq_z6plic.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/56"
    },
    {
        "name":  "Cuphead \u0026 The Delicious Last Course",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289703/CUPHEAD_ma6mty_hb4eug.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/469"
    },
    {
        "name":  "Cyberpunk 2077",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  35100,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/CYBERPUNK_2077_lv68ln_s8m9au.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/121"
    },
    {
        "name":  "DARK SOULS™ II: Scholar of the First Sin",
        "platform":  "PS4",
        "genre":  "ROL/RPG Aventura",
        "price":  35900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339533/DARK_SOULS_2_mqg0ti_vacp31.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/79"
    },
    {
        "name":  "DARK SOULS™ III",
        "platform":  "PS4",
        "genre":  "Aventura ROL/RPG",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339585/DARK_SOULS_3_u5sbor_zr4wbn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/57"
    },
    {
        "name":  "DARK SOULS™: REMASTERED",
        "platform":  "PS4",
        "genre":  "ROL/RPG Aventura",
        "price":  35100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339584/DARK_SOULS_REMASTERED_insag8_wsajws.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/71"
    },
    {
        "name":  "Days Gone",
        "platform":  "PS4",
        "genre":  "Acción Aventura Terror",
        "price":  59000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/DAYS_GONE_ozb8ph_xg8qlt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/199"
    },
    {
        "name":  "DayZ",
        "platform":  "PS4",
        "genre":  "Aventura Shooter",
        "price":  38300,
        "tag":  "-14%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1736995763/icon0_1_xctand.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/254"
    },
    {
        "name":  "Dead Island 2",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DEAD_ISLAND_2_1_ewzbty_oi3d0t.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/294"
    },
    {
        "name":  "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles 2 Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  94200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289710/kimetsu_ud4uho_ybp5qj.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/544"
    },
    {
        "name":  "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles 2 Standard Edition",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  46200,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289705/DEMON_SLAYER_fph2lo_oafeac.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/531"
    },
    {
        "name":  "Detroit: Become Human",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  23100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/DETROIT_twrkqw_j1krm0.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/75"
    },
    {
        "name":  "Detroit: Become Human Digital Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  30400,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289704/DETROIT_DELUXE_1_j47hqs_evkb21.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/384"
    },
    {
        "name":  "Devil May Cry 5 + Vergil",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  20700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339584/DEVIL_MAY_CRY_V_vcsvhx_odbdgc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/74"
    },
    {
        "name":  "Devil May Cry 5 Deluxe + Vergil",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  24000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DMC_5_DELUXE_1_crazsf_n1w6we.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/362"
    },
    {
        "name":  "Diablo® II: Resurrected™",
        "platform":  "PS4",
        "genre":  "Aventura ROL/RPG",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/DIABLO_III_svxheq_zl5fmk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/73"
    },
    {
        "name":  "Diablo® IV - Standard Edition",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/DIABLO_IV_yt42kd_k5ja5w.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/77"
    },
    {
        "name":  "DOOM Eternal",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  17600,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/DOOM_ETERNAL_pxdfgz_xzqwic.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/124"
    },
    {
        "name":  "DOOM Eternal Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DOOM_ETERNAL_DELUXE_sg0i9b_mdtsxa.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/361"
    },
    {
        "name":  "DRAGON BALL FighterZ",
        "platform":  "PS4",
        "genre":  "Acción Fighting",
        "price":  17600,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/DBZ_FIGHTERS_mfm7kc_tvvsvu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/69"
    },
    {
        "name":  "DRAGON BALL XENOVERSE 2",
        "platform":  "PS4",
        "genre":  "Acción Fighting",
        "price":  11200,
        "tag":  "-30%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/DBZ_XENOVERSE_2_n1qmej_ms0q0h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/66"
    },
    {
        "name":  "DRAGON BALL XENOVERSE 2 Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Acción Fighting",
        "price":  16000,
        "tag":  "-47%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/DBZ_XENOVERSE_2_ah7lg9_mt0ask.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/168"
    },
    {
        "name":  "DRAGON BALL XENOVERSE 2 Edición especial",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/DBZ_XENO_2_SPECIAL_r6zik9_pl6sbh.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/364"
    },
    {
        "name":  "DRAGON BALL Z: KAKAROT",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  26300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/DBZ_KAKAROT_ylz5pi_wo1pio.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/173"
    },
    {
        "name":  "Dying Light 2 Stay Human",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  23100,
        "tag":  "-26%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/DYING_LIGT_2_eyzlje_a5muvi.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/170"
    },
    {
        "name":  "Dying Light: True Survivors Bundle",
        "platform":  "PS4",
        "genre":  "Acción Terror",
        "price":  44700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DYINGH_LIGHT_DIGITAL_xez9mx_p2yic6.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/366"
    },
    {
        "name":  "EA SPORTS FC™ 25",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  46200,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/fc25_njzfhd_cdnmdb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/3"
    },
    {
        "name":  "EA SPORTS FC™ 26",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  57400,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289707/FC26_mj4doh_stiiaw.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/508"
    },
    {
        "name":  "EA SPORTS FC™ 26 TOTY Edition",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  55900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1769258335/FC_26_TOTTY_lo22mh.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/556"
    },
    {
        "name":  "Edición del paquete Cross-gen de STAR WARS™ Jedi",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  35100,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333559/STAR_WARS_BUNDLE_al9bmm_r6nzzt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/371"
    },
    {
        "name":  "ELDEN RING",
        "platform":  "PS4",
        "genre":  "Aventura ROL/RPG",
        "price":  63000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/ELDEN_RING_t0j7et_ws2wgb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/238"
    },
    {
        "name":  "F1® 24",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  41500,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1765221952/F1_24_sy0d2i.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/236"
    },
    {
        "name":  "F1® 24 Champions Edition",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  46200,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/F1_CHAMPS_z8kelk_prapcg.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/180"
    },
    {
        "name":  "Fallout 4",
        "platform":  "PS4",
        "genre":  "ROL/RPG",
        "price":  15200,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/FALLOUT_4_f32ikw_mougm8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/176"
    },
    {
        "name":  "Fallout 4 G.O.T.Y. Edition",
        "platform":  "PS4",
        "genre":  "ROL/RPG",
        "price":  24000,
        "tag":  "-17%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/FALLOUT_4_GOTY_rexcjp_cpwfhr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/309"
    },
    {
        "name":  "Far Cry 5",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  21600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/FAR_CRY_5_u3a6kr_ofc7t3.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/84"
    },
    {
        "name":  "Far Cry® 4 ",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  14300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/FARCRY_4_m0p4za_az3lwm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/270"
    },
    {
        "name":  "Far Cry® Primal",
        "platform":  "PS4",
        "genre":  "Aventura Shooter",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/FAR_CRY_PRIMAL_ofaj2b_x7p51j.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/182"
    },
    {
        "name":  "FAR CRY®6 Standard Edition",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  24800,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/FAR_CRY_6_wdrfjq_yz9py8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/184"
    },
    {
        "name":  "Farming Simulator 22",
        "platform":  "PS4",
        "genre":  "Simulación",
        "price":  55900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289706/FARMING_22_whfc1e_yfqu1g.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/536"
    },
    {
        "name":  "Five Nights at Freddy\u0027s: Security Breach",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  33400,
        "tag":  "-22%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289708/FN_SECURITY_1_miq9yt_htaurl.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/520"
    },
    {
        "name":  "Gang Beasts",
        "platform":  "PS4",
        "genre":  "Acción Fiesta",
        "price":  16000,
        "tag":  "-26%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/GANG_BEATS_u65xdh_e0hvj7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/88"
    },
    {
        "name":  "Ghost of Tsushima: VERSIÓN DEL DIRECTOR",
        "platform":  "PS4",
        "genre":  "Aventura ROL/RPG",
        "price":  36700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337806/TSUSHIMA_zvmi0i_fdhxpd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/86"
    },
    {
        "name":  "God of War",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  24800,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/GOD_OF_WAR_dgslwd_wuja4h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/178"
    },
    {
        "name":  "God of War Digital Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  29500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/GOW_4_DELUXE_fv7gp6_gamzbv.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/314"
    },
    {
        "name":  "God of War III Remastered",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  23100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/GOW_3_REMASTERED_a4phaq_ry5kjg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/82"
    },
    {
        "name":  "God of War Ragnarök",
        "platform":  "PS4",
        "genre":  "Aventura",
        "price":  44700,
        "tag":  "-5%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/RAGNAROK_nxqx1r_bunrb4.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/11"
    },
    {
        "name":  "God of War Ragnarök Edición Digital Deluxe",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  68600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1765232507/ragnarok_deluxe_dm7giq.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/289"
    },
    {
        "name":  "Gran Turismo® 7",
        "platform":  "PS4",
        "genre":  "Carreras Simulación",
        "price":  46200,
        "tag":  "-12%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/GRAN_TURISMO_7_gnsasl_dubkip.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/158"
    },
    {
        "name":  "Grand Theft Auto V",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  32700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/GTA_V_uaxpwf_nxunwi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/49"
    },
    {
        "name":  "Grand Theft Auto: The Trilogy - The Definitive Edition",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  30400,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/GTA_V_TRILOGY_c6vksu_jqupf9.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/126"
    },
    {
        "name":  "Guardianes de la Noche -Kimetsu no Yaiba- Las Crónicas de Hinokami",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  24000,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/GUARDIANES_DE_LA_NOCHE_wnrb6n_osvdo7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/267"
    },
    {
        "name":  "Hitman World of Assassination",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  43100,
        "tag":  "-13%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289710/HITMAN_qqq2sj_ga946g.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/461"
    },
    {
        "name":  "Hogwarts Legacy",
        "platform":  "PS4",
        "genre":  "Aventura",
        "price":  17600,
        "tag":  "-37%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/dR9KJAKDW2izPbptHQbh3rnj_y6m2yi_ox2aku.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/233"
    },
    {
        "name":  "Hogwarts Legacy: Edición Digital Deluxe",
        "platform":  "PS4",
        "genre":  "Aventura",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/HOGWARTS_DELUXE_fw1lsg_t4v011.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/160"
    },
    {
        "name":  "Hollow Knight Edición Corazón Vacío",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  22300,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1765827426/HOLOW_KNIGHT_1_quwnip.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/550"
    },
    {
        "name":  "Hollow Knight: Silksong",
        "platform":  "PS4",
        "genre":  "Aventura",
        "price":  27900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289710/HOLLOW_dnnglm_yrgm9q.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/526"
    },
    {
        "name":  "Horizon Forbidden West™",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  46200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741010001/horizoon_hdm7yu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/400"
    },
    {
        "name":  "Horizon Zero Dawn: Edición completa",
        "platform":  "PS4",
        "genre":  "Casual Aventura Acción",
        "price":  31100,
        "tag":  "-28%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1780607283/HORIZON_COMPLETE_qhnwqi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/585"
    },
    {
        "name":  "inFAMOUS Second Son",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/INFAMOU_SECOND_xvngdk_igzp8t.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/83"
    },
    {
        "name":  "It Takes Two",
        "platform":  "PS4",
        "genre":  "Único",
        "price":  21600,
        "tag":  "-16%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/IT_TAKES_TWO_nuc15n_xgrx85.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/91"
    },
    {
        "name":  "Jurassic World Evolution 2",
        "platform":  "PS4",
        "genre":  "Simulación Estrategia",
        "price":  35100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741009084/WZhQmSMCGEJgLHhnikOcuMnu_qvh8kr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/395"
    },
    {
        "name":  "Jurassic World Evolution 2: Edición Deluxe",
        "platform":  "PS4",
        "genre":  "Simulación Estrategia",
        "price":  36700,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/JW_2_DELUXE_EDITION_dea9by_lq0s4g.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/265"
    },
    {
        "name":  "La Tierra Media™: Paquete de las Sombras",
        "platform":  "PS4",
        "genre":  "Acción ROL/RPG",
        "price":  16000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336339/MIDDLE_BUNDLE_pxhuis_j5zcaq.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/166"
    },
    {
        "name":  "LEGO® Star Wars™ La saga de Skywalker",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  17600,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336339/LEGO_SKYWALKER_x9u5vw_quy2ac.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/161"
    },
    {
        "name":  "Lies of P",
        "platform":  "PS4",
        "genre":  "Aventura",
        "price":  47100,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/LIES_OF_P_zxtmsd_rkxkwv.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/19"
    },
    {
        "name":  "Little Nightmares I y II ",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/NIGHTMARES_2_iywb6t_vcnsm3.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/156"
    },
    {
        "name":  "Little Nightmares III",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  43100,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289710/LN_3_kjyztp_a1256k.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/541"
    },
    {
        "name":  "Lote Crash Bandicoot™: N. Sane Trilogy + CTR Nitro-Fueled",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  46200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/LOTE_CRASH_tomupt_xpxlk6.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/264"
    },
    {
        "name":  "Mad Max",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  12800,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333554/MAD_MAX_1_zed3kp_lfecvs.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/379"
    },
    {
        "name":  "Marvel\u0027s Spider-Man: Game of the Year Edition",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  36700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/SPIDERMAN_1_GOTY_yrov7o_ah84lk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/133"
    },
    {
        "name":  "Marvel\u0027s Spider-Man: Miles Morales",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  32700,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/SPIDERMAN_MILES_MORALES_oxx9ei_ic2cst.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/137"
    },
    {
        "name":  "Marvel\u0027s Spider-Man: Miles Morales Edición Definitiva",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  43100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289712/MILES_MORALES_DEF_mmm9vf_x2cvdd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/517"
    },
    {
        "name":  "Minecraft",
        "platform":  "PS4",
        "genre":  "Aventura Arcade",
        "price":  30400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336341/MINECRAFT_tdhshj_rr2kel.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/154"
    },
    {
        "name":  "Mortal Kombat 11",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  12000,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/MK11_vq6tzw_nc8l1v.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/28"
    },
    {
        "name":  "Mortal Kombat 11 Ultimate",
        "platform":  "PS4",
        "genre":  "Único Fighting",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741009330/SbTOirUJUZ3oNQG0eGDZAuCr_ay8yr7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/396"
    },
    {
        "name":  "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition",
        "platform":  "PS4",
        "genre":  "Acción Fighting",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/MK11_INJUSTICE_2_usyeql_gpi2ve.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/93"
    },
    {
        "name":  "Mortal Kombat X",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  13500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336341/MK_X_htu8yc_zzpbck.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/151"
    },
    {
        "name":  "Mortal Kombat XL",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  12000,
        "tag":  "-29%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/MK_XL_d6fqaj_qp0l3n.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/272"
    },
    {
        "name":  "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289712/NARUTO_1_ncvnwc_vjvbra.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/522"
    },
    {
        "name":  "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS",
        "platform":  "PS4",
        "genre":  "Acción Fighting",
        "price":  36700,
        "tag":  "-22%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337802/NARUTO_ftbqex_gr4yyl.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/95"
    },
    {
        "name":  "NBA 2K25",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/NBA2K25_1_nx1gu2_er5jqr.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/10"
    },
    {
        "name":  "NBA 2K25 Edición All-Star",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  57400,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333555/NBA_2K25_ALLSTAR_1_tspnsk_nxublj.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/337"
    },
    {
        "name":  "NBA 2K25 Edición Torneo",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333556/NBA2K25_TORNEO_e7tart_wgko4m.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/370"
    },
    {
        "name":  "NBA 2K26",
        "platform":  "PS4",
        "genre":  "Deportes",
        "price":  20700,
        "tag":  "-33%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289713/NBA_2K26_odr1vm_gkn7x7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/524"
    },
    {
        "name":  "Need for Speed™ Heat",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  15500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_HEAT_ehpnbe_khijym.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/104"
    },
    {
        "name":  "Need for Speed™ Heat Edición Deluxe",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  14300,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_HEAT_DELUXE_ch1otb_dnsm9a.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/100"
    },
    {
        "name":  "Need for Speed™ Payback",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  13500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_PAYBACK_i0n954_ng5krs.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/107"
    },
    {
        "name":  "Need for Speed™ Rivals",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  12000,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_RIVALS_o84kes_ilpzpm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/109"
    },
    {
        "name":  "No Man\u0027s Sky",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  36700,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289714/no_man_sky_gfn9gc_jnbjot.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/296"
    },
    {
        "name":  "Outlast: Trinity",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  16700,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/OUTLAS_TRINITY_sjk2e4_zlhshz.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/62"
    },
    {
        "name":  "Overcooked! + Overcooked! 2",
        "platform":  "PS4",
        "genre":  "Familia Casual",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289715/OC_2_xlvcsp_joga63.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/470"
    },
    {
        "name":  "Overcooked! 2",
        "platform":  "PS4",
        "genre":  "Casual Familia",
        "price":  14100,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289716/OVERCOOKED2_1_k0zl68_z4buih.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/464"
    },
    {
        "name":  "Overcooked! 2 - Gourmet Edition",
        "platform":  "PS4",
        "genre":  "Casual Familia",
        "price":  16000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333557/OC_2_GOURMET_wl9uvm_nxqykz.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/316"
    },
    {
        "name":  "Pack triple de Resident Evil",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  30400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336343/RACCON_CITY_qpqj1v_ba3jqu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/262"
    },
    {
        "name":  "Paquete de Familia EA",
        "platform":  "PS4",
        "genre":  "Aventura Carreras",
        "price":  15200,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/PAQUETE_EA_tijdax_urbo7h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/149"
    },
    {
        "name":  "Paquete de juegos LEGO®",
        "platform":  "PS4",
        "genre":  "Único",
        "price":  17600,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741009772/11307z4N5igu3IQAbq_kcEW3Hr8dywi6x2cH6R089EKQzAnAjsKkd2fcj9Xi4lcATphK4Y-QhIHHnaUWMxiBRKPUhUQeNdNX_to2eld.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/398"
    },
    {
        "name":  "Paquete de la saga Metro",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  12800,
        "tag":  "-41%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/METRO_SAGA_twmbke_cqab9o.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/81"
    },
    {
        "name":  "PAYDAY 2: CRIMEWAVE EDITION",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  14100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/PAYDAY_2_CRIMEWAVE_igk2bh_nmgxzc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/148"
    },
    {
        "name":  "Plants vs. Zombies™ Garden Warfare 2: Edición Standard",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  15500,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1766787740/PVZ_2_1_bn1eni.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/259"
    },
    {
        "name":  "Plants vs. Zombies™: Replanted",
        "platform":  "PS4",
        "genre":  "Estrategia",
        "price":  21600,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289716/PLANTS_VS_ZOMBIES_REPLANTED_hqelbi_aheute.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/539"
    },
    {
        "name":  "Poppy Playtime: Capítulo 1",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  7900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333558/POPPY_PT_C1_ep3fcw_qsrvov.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/330"
    },
    {
        "name":  "Poppy Playtime: Capítulo 2",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  11200,
        "tag":  "-42%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333558/POPPY_PT_CP2_zmledh_naqyxb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/333"
    },
    {
        "name":  "Poppy Playtime: Capítulo 3",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  14300,
        "tag":  "-36%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333558/POPPY_PT_CP3_git8w8_s0avo9.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/334"
    },
    {
        "name":  "Poppy Playtime: Capítulo 4",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  18400,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1775824793/POPPY_PLAYTIME_4_ocvhm8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/569"
    },
    {
        "name":  "RACCOON CITY EDITION",
        "platform":  "PS4",
        "genre":  "Aventura Acción",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289717/raccoon_city_utaqgh_yvw760.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/261"
    },
    {
        "name":  "Ratchet \u0026 Clank™",
        "platform":  "PS4",
        "genre":  "Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1773490129/RATCHET_AND_CLANK_dt4wnd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/566"
    },
    {
        "name":  "Red Dead Redemption",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  38300,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333558/RDR1_1_jbwvly_dthmqa.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/292"
    },
    {
        "name":  "Red Dead Redemption 2",
        "platform":  "PS4",
        "genre":  "Aventura Acción",
        "price":  24000,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/RDR2_ljmgmx_e0to9o.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/9"
    },
    {
        "name":  "Red Dead Redemption 2: Edición Definitiva",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  33400,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/RDR2_DE_v0k2pb_mt0mto.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/204"
    },
    {
        "name":  "Resident Evil 4 Gold Edition ",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  46200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333559/RESIDEN_EVIL_4_GOLD_duuvw8_htkci8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/288"
    },
    {
        "name":  "Resident Evil 4 Remake",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  18400,
        "tag":  "-48%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/RESIDENT_EVIL_4_ezngpc_piovla.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/13"
    },
    {
        "name":  "RESIDENT EVIL 5",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  11200,
        "tag":  "-20%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/RESIDENT_EVIL_5_mrzint_iioyyg.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/112"
    },
    {
        "name":  "RESIDENT EVIL 7 biohazard",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  16000,
        "tag":  "-29%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/RESIDENT_EVIL_BIOHAZARD_vxi96z_qk9mxx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/111"
    },
    {
        "name":  "Resident Evil Village",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  17600,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336351/VILLAGE_STANDAR_icmrtb_bucmnd.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/132"
    },
    {
        "name":  "Resident Evil Village Gold Edition",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  32700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336351/VILLAGE_cxv3gt_cgosuu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/131"
    },
    {
        "name":  "Sekiro™: Shadows Die Twice - Edición Juego del Año",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  41500,
        "tag":  "-10%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/SEKIRO_qmxqij_aptufj.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/25"
    },
    {
        "name":  "SHADOW OF THE COLOSSUS",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  21600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336344/SHADOW_OTC_lbiv0p_sefubn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/206"
    },
    {
        "name":  "Shadow of the Tomb Raider Definitive Edition",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  19000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1736091648/icon0_pjufzz.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/250"
    },
    {
        "name":  "Sid Meier’s Civilization® VII",
        "platform":  "PS4",
        "genre":  "Estrategia",
        "price":  84500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333550/CIVILIZATION_VII_tzjlnt_he4tbk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/358"
    },
    {
        "name":  "Sleeping Dogs™ Definitive Edition",
        "platform":  "PS4",
        "genre":  "Acción Fighting",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337806/SLEEPIN_DOGS_khnefz_keve6j.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/239"
    },
    {
        "name":  "Slime Rancher",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  11200,
        "tag":  "-33%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333559/SLIME_RANCHER_hpevpy_zol3lz.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/319"
    },
    {
        "name":  "Sniper Elite 4",
        "platform":  "PS4",
        "genre":  "Aventura Shooter",
        "price":  14100,
        "tag":  "-12%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336346/SNIPER_ELITE_4_dulzgh_vi1qoo.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/241"
    },
    {
        "name":  "Sniper Elite 5",
        "platform":  "PS4",
        "genre":  "Shooter",
        "price":  30400,
        "tag":  "-17%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337807/SNIPER_ELITE_5_n4gpkv_fmjujf.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/114"
    },
    {
        "name":  "SnowRunner",
        "platform":  "PS4",
        "genre":  "Arcade Carreras",
        "price":  31900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/SNOWRUNNER_w969vx_mpyzsb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/247"
    },
    {
        "name":  "STAR WARS Jedi: La Orden caída™",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  14300,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/JEDI_FALLEN_qwyok2_savzg0.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/139"
    },
    {
        "name":  "STAR WARS™ Battlefront™ II",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  15500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/BATTLEFRONT_2_mnbyjf_dzjlo9.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/136"
    },
    {
        "name":  "Subnautica",
        "platform":  "PS4",
        "genre":  "Único",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289720/SUBNAUTICA_ojey8j_n3ozwg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/391"
    },
    {
        "name":  "Subnautica: Below Zero",
        "platform":  "PS4",
        "genre":  "Único",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289720/SUBNAUTICA_BELOW_bgmyve_rnvjhe.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/390"
    },
    {
        "name":  "Terraria: PS4™ Edition",
        "platform":  "PS4",
        "genre":  "Aventura ROL/RPG",
        "price":  17600,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289721/TERRARIA_1_nzcmuz_rpbpqe.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/528"
    },
    {
        "name":  "The Crew Motorfest",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/THE_CREW_MOTORFEST_rrurhd_c9lnkp.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/18"
    },
    {
        "name":  "The Crew Motorfest Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  30400,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333555/MOTORFEST_DELUXE_vhtyai_nbazu3.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/312"
    },
    {
        "name":  "The Elder Scrolls V: Skyrim Anniversary Edition",
        "platform":  "PS4",
        "genre":  "ROL/RPG Acción",
        "price":  26300,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/SKYRIM_ANIV_g6y2jx_zndnvg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/98"
    },
    {
        "name":  "The Elder Scrolls V: Skyrim Special Edition",
        "platform":  "PS4",
        "genre":  "ROL/RPG",
        "price":  20700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337804/SKYRIM_n3oyhl_zofo85.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/116"
    },
    {
        "name":  "The Evil Within 2",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  16000,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289721/THE_EVIL_WITHIN_2_edc5qe_fn6bp8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/457"
    },
    {
        "name":  "The Evil Within Digital Bundle",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  16000,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/THE_EVIL_WITHIN_fadln5_w36gp3.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/142"
    },
    {
        "name":  "THE FOREST",
        "platform":  "PS4",
        "genre":  "Terror Aventura",
        "price":  12800,
        "tag":  "-30%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/THE_FOREST_mt1z5j_ojo1vb.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/145"
    },
    {
        "name":  "THE KING OF FIGHTERS XV Edición Deluxe",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289722/TKOF_XV_DELUXE_sfse7l_cycqnc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/383"
    },
    {
        "name":  "THE KING OF FIGHTERS XV Edición Estándar",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/KOF_XV_cdjyr6_s34hmy.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/276"
    },
    {
        "name":  "The Last of Us Part II",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/TLOU_PARTE_2_jgbhvh_g2jdhb.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/201"
    },
    {
        "name":  "The Last of Us Part II Digital Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  54200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289723/TLOU_2_DIGITAL_ufnak3_g45ymi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/513"
    },
    {
        "name":  "The Last Of Us™ Remastered ",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  24800,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/TLOU_REMASTERED_igk8kj_o5pask.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/141"
    },
    {
        "name":  "The Outlast Trials",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  18400,
        "tag":  "-28%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289715/OUTLAST_DELUXE_otpf8c_zlmhtn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/511"
    },
    {
        "name":  "The Outlast Trials Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1767874469/OUTLAS_TRIAL_DELUXE_jftca0.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/466"
    },
    {
        "name":  "The Quarry",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  16700,
        "tag":  "-13%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/THE_QUARRY_ur4xxw_twdwqk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/279"
    },
    {
        "name":  "The Quarry - Edición Deluxe",
        "platform":  "PS4",
        "genre":  "Terror",
        "price":  19100,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333559/THE_QUARRY_DELUXE_1_re3txq_mhshu9.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/380"
    },
    {
        "name":  "The Warriors®",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  16700,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289722/THE_WARRIORS_vjgywv_fapy81.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/375"
    },
    {
        "name":  "The Witcher 3: Wild Hunt – Complete Edition",
        "platform":  "PS4",
        "genre":  "Acción ROL/RPG",
        "price":  18400,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336351/WITCHER_3_COMPLETE_uzn1pw_n1dumy.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/129"
    },
    {
        "name":  "Tom Clancy’s Ghost Recon Wildlands Ultimate Edition",
        "platform":  "PS4",
        "genre":  "Acción",
        "price":  38300,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333562/WIDLANDS_ULTIMATE_1_gej1xh_sqrhop.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/343"
    },
    {
        "name":  "Tom Clancy’s Ghost Recon® Wildlands Standard Edition",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  30400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333553/GR_WIDLANDS_odyumz_lev0gg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/310"
    },
    {
        "name":  "Tom Clancy\u0027s Ghost Recon® Breakpoint",
        "platform":  "PS4",
        "genre":  "Acción Shooter",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/BREAKPOINT_at5qw4_wuo63h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/388"
    },
    {
        "name":  "Tomb Raider: Definitive Survivor Trilogy",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  22300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764800512/TOMB_RAIDER_1_lmjukk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/547"
    },
    {
        "name":  "Trilogía Mafia",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  17600,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/MAFIA_TRILOGY_cod0w6_lbb2qo.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/87"
    },
    {
        "name":  "UNCHARTED 4: El final de un ladrón y Uncharted: The Lost Legacy Paquete digital",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  36700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/UNCHARTED_DIGITAL_admduo_kwmmej.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/273"
    },
    {
        "name":  "UNCHARTED The Nathan Drake Collection",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  26300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/UNCHARTED_COLECCTION_iqmgsa_zwbdcm.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/200"
    },
    {
        "name":  "Watch Dogs 1 + Watch Dogs 2 Gold Editions Bundle",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333562/WD_1_Y_2_leekci_kiqm39.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/324"
    },
    {
        "name":  "Watch Dogs 2 Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  27100,
        "tag":  "-11%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333562/WD_2_DELUXE_i02o0u_lgmrsr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/322"
    },
    {
        "name":  "Watch Dogs: Legion - Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/WDLDE_fahtwe_fdqu9j.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/42"
    },
    {
        "name":  "Watch Dogs®: Legion",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/WDL_bt65ri_iqpxqb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/38"
    },
    {
        "name":  "Watch Dogs®2",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  16000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/WD2_nk4tpq_nte7dd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/44"
    },
    {
        "name":  "WATCH_DOGS™ COMPLETE EDITION",
        "platform":  "PS4",
        "genre":  "Acción Aventura",
        "price":  12000,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/WDEC_b1bunt_esjckn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/37"
    },
    {
        "name":  "WRC 10 FIA World Rally Championship Deluxe Edition",
        "platform":  "PS4",
        "genre":  "Carreras",
        "price":  21600,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333563/WRC_10_DELUXE_nw0tpf_nmj4dg.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/327"
    },
    {
        "name":  "WWE 2K24",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  36700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337807/WWE_2K24_qj9v6g_gyjfel.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/123"
    },
    {
        "name":  "WWE 2K25",
        "platform":  "PS4",
        "genre":  "Fighting",
        "price":  49500,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333563/WWE2K25_rzgn6o_civdhd.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/354"
    },
    {
        "name":  "Yakuza: Like a Dragon",
        "platform":  "PS4",
        "genre":  "Único",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339590/YAKUZA_eomkp3_opkmhc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/46"
    }
];

    // PS5
    const ps5Products = [
    {
        "name":  " Call of Duty®: Ghosts Edición Oro",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333550/COD_GHOST_1_micenv_muuyo3.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/348"
    },
    {
        "name":  "007 First Light",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  106900,
        "tag":  "PRE-ORDER",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1777898392/007_iptvjr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/575"
    },
    {
        "name":  "A Way Out",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  15500,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/A_WAY_OUT_izemem_p6cjf2.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/187"
    },
    {
        "name":  "Age of Mythology: Retold",
        "platform":  "PS5",
        "genre":  "Estrategia",
        "price":  47100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333550/AGE_MITOLOGY_ws6kbh_hks00w.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/356"
    },
    {
        "name":  "Alien: Isolation",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  15200,
        "tag":  "-14%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289701/ALIEN_ISOLATION_u04pen_nzwig4.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/516"
    },
    {
        "name":  "Among Us",
        "platform":  "PS5",
        "genre":  "Fiesta",
        "price":  9600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/AMONG_US_pk7bzc_clskgy.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/198"
    },
    {
        "name":  "ARC Raiders",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  63000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289701/ARC_RAIDERS_h4gf3q_ybjw7m.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/545"
    },
    {
        "name":  "ARK: Survival Ascended",
        "platform":  "PS5",
        "genre":  "ROL/RPG Aventura",
        "price":  41500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/ARK_SURVIVAL_f1dbbe_di4yz6.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/24"
    },
    {
        "name":  "Arma Reforger",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  57400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1773490129/ARMA_fhvpig.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/564"
    },
    {
        "name":  "Assassin’s Creed Shadows",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  62300,
        "tag":  "-20%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/ASS_SHADOW_ggzqnr_fcv7sj.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/349"
    },
    {
        "name":  "Assassin’s Creed® IV Black Flag™",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/ASSASSINS_CREED_BLACK_FLAG_q9qycu_a6akyb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/207"
    },
    {
        "name":  "Assassin’s Creed® Origins",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289700/AC_ORIGINS_gazymr_iw2fhe.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/454"
    },
    {
        "name":  "Assassin\u0027s Creed Black Flag Resynced",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  90900,
        "tag":  "PRE-ORDER",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1777898393/AC_BLACK_FLAG_PS5_cmydiz.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/577"
    },
    {
        "name":  "Assassin\u0027s Creed® Odyssey",
        "platform":  "PS5",
        "genre":  "Aventura Acción",
        "price":  25500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/ASSASINSCREED_ODYSSEY_vsrsoe_g9vsdu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/223"
    },
    {
        "name":  "Assassin\u0027s Creed® Valhalla",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/VALHALLA_zxyskh_u9gm0q.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/23"
    },
    {
        "name":  "Assetto Corsa",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  16700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1767874470/ASETTO_CORSA_dhghin.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/499"
    },
    {
        "name":  "ASTRO BOT",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  63000,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/ASTRO_BOT_qqxaw8_r6jjbg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/40"
    },
    {
        "name":  "Avatar: Frontiers of Pandora",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  49500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1766840433/AVATAR_u3zx2r.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/552"
    },
    {
        "name":  "Back 4 Blood",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  12000,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/BACK_4_BLOOD_DELUXE_m5gkvi_dofren.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/211"
    },
    {
        "name":  "Batman: Arkham Collection",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  12800,
        "tag":  "-45%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BATMAN_ARKHAM_qrdhrp_qdmduk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/302"
    },
    {
        "name":  "Batman: Return to Arkham",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  12000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BATMAN_RETURN_uce25w_ieterv.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/299"
    },
    {
        "name":  "Batman™: Arkham Knight",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  13500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BATMAN_ARKHAM_KNIGHT_ys8jdg_xrpwht.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/304"
    },
    {
        "name":  "Battlefield™ 1",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  9600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1780083413/BATTLEFIELD_1_1_jymyfj.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/581"
    },
    {
        "name":  "Battlefield™ 1 Revolution",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  12000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/BATTLEFIELD_1_REVOLUTION_esfaax_j3pqvs.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/209"
    },
    {
        "name":  "Battlefield™ 2042",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  19100,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BATTLEFIELD_2042_c6qyky_xobll6.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/50"
    },
    {
        "name":  "Battlefield™ 6 Standard Edition",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  62300,
        "tag":  "-20%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289701/BATTLEFIELD_6_f1rg4w_s6ctwf.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/512"
    },
    {
        "name":  "Battlefield™ V",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  19100,
        "tag":  "-14%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BATTLEFIELD_V_q6ezzk_lcqtcm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/217"
    },
    {
        "name":  "Battlefield™ V Definitive Edition",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BATTLEFIELD_V_DE_clx4ex_cas7o8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/216"
    },
    {
        "name":  "Black Myth: Wukong",
        "platform":  "PS5",
        "genre":  "Aventura Acción",
        "price":  75000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/WUKONG_zeti7q_xzbygd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/45"
    },
    {
        "name":  "Bloodborne™",
        "platform":  "PS5",
        "genre":  "Acción ROL/RPG",
        "price":  21600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BLOODBORNE_vltzaj_e9l5yz.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/191"
    },
    {
        "name":  "Bloodborne™ Complete Edition Bundle",
        "platform":  "PS5",
        "genre":  "Acción ROL/RPG",
        "price":  27900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339529/BLOODBORNE_CE_qptbmx_ibqj1r.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/386"
    },
    {
        "name":  "Borderlands 3",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  12000,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339530/BORDERLANDS_3_vmrkzu_cblwce.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/64"
    },
    {
        "name":  "Bully",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  16700,
        "tag":  "-16%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289702/BULLY_yubgdz_bfrvmt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/453"
    },
    {
        "name":  "Call of Duty®: Advanced Warfare Gold Edition",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1737110187/z5p1CPfhzrRxMWSN0k4V6ZGDvADYnh3x_kzjden.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/257"
    },
    {
        "name":  "Call of Duty®: Black Ops 4",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/COD_BO_4_qlcctd_a9ruqi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/249"
    },
    {
        "name":  "Call of Duty®: Black Ops 6 - Paquete Multigeneración",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  60600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339530/COD_BO_6_ivvdxq_mukh1c.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/58"
    },
    {
        "name":  "Call of Duty®: Black Ops 7 - Paquete Multigeneración",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  78100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289703/COD_BO_7_y2lncg_n3f15t.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/533"
    },
    {
        "name":  "Call of Duty®: Black Ops Cold War Multigeneración",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  34300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/COD_COLD_WAR_CROSS_orhzbx_vlrrms.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/305"
    },
    {
        "name":  "Call of Duty®: Black Ops III - Zombies Chronicles Deluxe",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  67000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/COD_BO_3_ZOMBIES_npbaq6_pj6imm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/307"
    },
    {
        "name":  "Call of Duty®: Black Ops III - Zombies Chronicles Edition",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  28700,
        "tag":  "-16%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1733764820/cod_black_ops_3_helu7e.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/226"
    },
    {
        "name":  "Call of Duty®: Infinite Warfare",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/COD_INFINITI_1_vsakem_n7tl04.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/340"
    },
    {
        "name":  "Call of Duty®: Infinite Warfare - Legacy Edition",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  47100,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/COD_INFINITE_Y_MW_cenrnj_aih82a.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/345"
    },
    {
        "name":  "Call of Duty®: Modern Warfare III",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  43100,
        "tag":  "-18%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/COD_MW_3_u84l3a_fohsxb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/242"
    },
    {
        "name":  "Call of Duty®: Modern Warfare®",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  31100,
        "tag":  "-9%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/COD_MW_o77civ_fq6sc2.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/277"
    },
    {
        "name":  "Call of Duty®: Modern Warfare® 4",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  110900,
        "tag":  "PRE-ORDER",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1780414114/COD_MW_4_wy1yei.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/583"
    },
    {
        "name":  "Call of Duty®: Modern Warfare® II - Lote Multigeneración",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  43100,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1766366813/W5uSEsW7yefCNTHatS03v5q7.png_bshh5i.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/189"
    },
    {
        "name":  "Call of Duty®: WWII Gold Edition",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/COD_WW_II_jqsikm_pe0tug.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/171"
    },
    {
        "name":  "Captain Tsubasa: Rise of New Champions",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  21600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/CAPTAIN_SUBASA_mgjo3t_rpwsxu.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/235"
    },
    {
        "name":  "Captain Tsubasa: Rise of New Champions, Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  28700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289702/CAPTAIN_TSUBASA_DELUXE_ajyr3i_mpkgkx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/446"
    },
    {
        "name":  "Clair Obscur: Expedition 33",
        "platform":  "PS5",
        "genre":  "ROL/RPG",
        "price":  78100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289706/EXPEDITION_33_oipgoz_bbanbc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/537"
    },
    {
        "name":  "Colección LEGO® Marvel",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  16000,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/LEGO_MARVEL_COLLECTION_dml45k_ladmrx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/163"
    },
    {
        "name":  "Crimson Desert",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  105300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1772985999/CRIMSON_DESERT_od68ae.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/563"
    },
    {
        "name":  "Cuphead",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  27900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339530/CUPHEAD_n64tbq_z6plic.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/218"
    },
    {
        "name":  "Cuphead \u0026 The Delicious Last Course",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289703/CUPHEAD_ma6mty_hb4eug.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/468"
    },
    {
        "name":  "Cyberpunk 2077",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  35100,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/CYBERPUNK_2077_lv68ln_s8m9au.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/120"
    },
    {
        "name":  "DARK SOULS™ II: Scholar of the First Sin",
        "platform":  "PS5",
        "genre":  "ROL/RPG Aventura",
        "price":  35900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339533/DARK_SOULS_2_mqg0ti_vacp31.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/220"
    },
    {
        "name":  "DARK SOULS™ III",
        "platform":  "PS5",
        "genre":  "Aventura ROL/RPG",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339585/DARK_SOULS_3_u5sbor_zr4wbn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/221"
    },
    {
        "name":  "DARK SOULS™: REMASTERED",
        "platform":  "PS5",
        "genre":  "ROL/RPG Aventura",
        "price":  35100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339584/DARK_SOULS_REMASTERED_insag8_wsajws.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/219"
    },
    {
        "name":  "Days Gone",
        "platform":  "PS5",
        "genre":  "Acción Aventura Terror",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/DAYS_GONE_ozb8ph_xg8qlt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/237"
    },
    {
        "name":  "Days Gone Remastered",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  44700,
        "tag":  "-13%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/DAYS_GONE_REMASTERED_jtfpac_ufkfew.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/351"
    },
    {
        "name":  "DayZ",
        "platform":  "PS5",
        "genre":  "Aventura Shooter",
        "price":  38300,
        "tag":  "-14%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1736995763/icon0_1_xctand.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/255"
    },
    {
        "name":  "Dead Island 2",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DEAD_ISLAND_2_1_ewzbty_oi3d0t.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/293"
    },
    {
        "name":  "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles 2 Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  94200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289710/kimetsu_ud4uho_ybp5qj.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/543"
    },
    {
        "name":  "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles 2 Standard Edition",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  46200,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289705/DEMON_SLAYER_fph2lo_oafeac.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/530"
    },
    {
        "name":  "Detroit: Become Human",
        "platform":  "PS5",
        "genre":  "Aventura Acción",
        "price":  23100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/DETROIT_twrkqw_j1krm0.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/224"
    },
    {
        "name":  "Detroit: Become Human Digital Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  28700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289704/DETROIT_DELUXE_1_j47hqs_evkb21.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/385"
    },
    {
        "name":  "Devil May Cry 5 + Vergil (GRAFICOS PS4)",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339584/DEVIL_MAY_CRY_V_vcsvhx_odbdgc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/222"
    },
    {
        "name":  "Devil May Cry 5 Deluxe + Vergil (GRAFICOS PS4)",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DMC_5_DELUXE_1_crazsf_n1w6we.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/363"
    },
    {
        "name":  "Devil May Cry 5 Special Edition",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289705/DMC_V_SPECIAL_EDITION_mdakj5_cpxevc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/459"
    },
    {
        "name":  "Diablo® II: Resurrected™",
        "platform":  "PS5",
        "genre":  "Aventura ROL/RPG",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/DIABLO_III_svxheq_zl5fmk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/72"
    },
    {
        "name":  "Diablo® IV - Standard Edition",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/DIABLO_IV_yt42kd_k5ja5w.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/76"
    },
    {
        "name":  "DOOM Eternal",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  17600,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/DOOM_ETERNAL_pxdfgz_xzqwic.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/125"
    },
    {
        "name":  "DOOM Eternal Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DOOM_ETERNAL_DELUXE_sg0i9b_mdtsxa.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/360"
    },
    {
        "name":  "DOOM: The Dark Ages",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  38300,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DOOM_THE_ARK_adbtid_dalr3s.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/355"
    },
    {
        "name":  "DRAGON BALL FighterZ",
        "platform":  "PS5",
        "genre":  "Acción Fighting",
        "price":  17600,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/DBZ_FIGHTERS_mfm7kc_tvvsvu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/68"
    },
    {
        "name":  "DRAGON BALL XENOVERSE 2",
        "platform":  "PS5",
        "genre":  "Acción Fighting",
        "price":  11200,
        "tag":  "-30%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/DBZ_XENOVERSE_2_n1qmej_ms0q0h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/67"
    },
    {
        "name":  "DRAGON BALL XENOVERSE 2 Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Acción Fighting",
        "price":  16000,
        "tag":  "-41%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/DBZ_XENOVERSE_2_ah7lg9_mt0ask.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/167"
    },
    {
        "name":  "DRAGON BALL XENOVERSE 2 Edición especial",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/DBZ_XENO_2_SPECIAL_r6zik9_pl6sbh.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/365"
    },
    {
        "name":  "DRAGON BALL Z: KAKAROT",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  26300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/DBZ_KAKAROT_ylz5pi_wo1pio.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/234"
    },
    {
        "name":  "DRAGON BALL: Sparking! ZERO",
        "platform":  "PS5",
        "genre":  "Acción Fighting",
        "price":  55900,
        "tag":  "-29%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/DBZ_SPARKING_ZERO_blc2bc_tmrlfy.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/70"
    },
    {
        "name":  "Dying Light 2 Stay Human",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  23100,
        "tag":  "-26%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/DYING_LIGT_2_eyzlje_a5muvi.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/169"
    },
    {
        "name":  "Dying Light: The Beast",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  73400,
        "tag":  "-12%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289705/DYING_TLIGHT_THE_BEAST_lpmnnv_wlmkfn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/527"
    },
    {
        "name":  "Dying Light: True Survivors Bundle",
        "platform":  "PS5",
        "genre":  "Acción Terror",
        "price":  44700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/DYINGH_LIGHT_DIGITAL_xez9mx_p2yic6.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/367"
    },
    {
        "name":  "EA SPORTS FC™ 25",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  47900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/fc25_njzfhd_cdnmdb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/119"
    },
    {
        "name":  "EA SPORTS FC™ 26",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289707/FC26_mj4doh_stiiaw.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/509"
    },
    {
        "name":  "EA SPORTS FC™ 26 TOTY Edition",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  55900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1769258335/FC_26_TOTTY_lo22mh.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/555"
    },
    {
        "name":  "EA SPORTS™ FC 24",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  31900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/FC24_1_u1pt7n_mge4mn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/329"
    },
    {
        "name":  "EA SPORTS™ UFC® 5",
        "platform":  "PS5",
        "genre":  "Fighting Deportes",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/UFC_5_himgco_orety5.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/21"
    },
    {
        "name":  "EA SPORTS™ UFC® 5 DEFINITIVE EDITION",
        "platform":  "PS5",
        "genre":  "Fighting Deportes",
        "price":  49500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333561/UFC5_DEFINITIVE_ot0bom_ngflij.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/323"
    },
    {
        "name":  "EA SPORTS™ UFC® 5 Edición Deluxe",
        "platform":  "PS5",
        "genre":  "Fighting Deportes",
        "price":  44700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333560/UFC_5_DELUXE_exkcvh_pep4u1.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/373"
    },
    {
        "name":  "Edición del paquete Cross-gen de STAR WARS™ Jedi",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  35100,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333559/STAR_WARS_BUNDLE_al9bmm_r6nzzt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/372"
    },
    {
        "name":  "Edición Estándar WWE 2K26",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  104500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dqkgurq8q/image/upload/v1771546084/WWE_2K26_dakigf.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/561"
    },
    {
        "name":  "ELDEN RING",
        "platform":  "PS5",
        "genre":  "ROL/RPG Aventura",
        "price":  63000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/ELDEN_RING_t0j7et_ws2wgb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/78"
    },
    {
        "name":  "F1® 24",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  41500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1765221952/F1_24_sy0d2i.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/7"
    },
    {
        "name":  "F1® 24 Champions Edition",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  46200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/F1_CHAMPS_z8kelk_prapcg.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/179"
    },
    {
        "name":  "F1® 25",
        "platform":  "PS5",
        "genre":  "Carreras Simulación",
        "price":  70200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289706/F1_25_u69r3l_kwolpr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/451"
    },
    {
        "name":  "Fallout 4",
        "platform":  "PS5",
        "genre":  "ROL/RPG",
        "price":  15200,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/FALLOUT_4_f32ikw_mougm8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/175"
    },
    {
        "name":  "Fallout 4 G.O.T.Y. Edition",
        "platform":  "PS5",
        "genre":  "ROL/RPG",
        "price":  24000,
        "tag":  "-17%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/FALLOUT_4_GOTY_rexcjp_cpwfhr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/308"
    },
    {
        "name":  "Far Cry 5",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/FAR_CRY_5_u3a6kr_ofc7t3.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/227"
    },
    {
        "name":  "Far Cry® 4 ",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  14300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/FARCRY_4_m0p4za_az3lwm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/269"
    },
    {
        "name":  "Far Cry® Primal",
        "platform":  "PS5",
        "genre":  "Aventura Shooter",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/FAR_CRY_PRIMAL_ofaj2b_x7p51j.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/181"
    },
    {
        "name":  "FAR CRY®6 Standard Edition",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/FAR_CRY_6_wdrfjq_yz9py8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/183"
    },
    {
        "name":  "Farming Simulator 22",
        "platform":  "PS5",
        "genre":  "Simulación",
        "price":  55900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289706/FARMING_22_whfc1e_yfqu1g.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/535"
    },
    {
        "name":  "Farming Simulator 25",
        "platform":  "PS5",
        "genre":  "Simulación",
        "price":  63000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1775824794/FARMING_25_fh6h6l.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/567"
    },
    {
        "name":  "Five Nights at Freddy\u0027s: Security Breach",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  33400,
        "tag":  "-22%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289708/FN_SECURITY_1_miq9yt_htaurl.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/519"
    },
    {
        "name":  "Forza Horizon 5",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  63000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289708/FH_5_puqp3q_okwcd0.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/402"
    },
    {
        "name":  "Gang Beasts",
        "platform":  "PS5",
        "genre":  "Acción Fiesta",
        "price":  16000,
        "tag":  "-17%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/GANG_BEATS_u65xdh_e0hvj7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/229"
    },
    {
        "name":  "Ghost of Tsushima: VERSIÓN DEL DIRECTOR",
        "platform":  "PS5",
        "genre":  "Aventura ROL/RPG",
        "price":  36700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337806/TSUSHIMA_zvmi0i_fdhxpd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/85"
    },
    {
        "name":  "Ghost of Yōtei™",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  79000,
        "tag":  "-13%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289709/GHOST_OF_YOTEI_dxsspi_yboxt7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/502"
    },
    {
        "name":  "God of War",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  24800,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/GOD_OF_WAR_dgslwd_wuja4h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/177"
    },
    {
        "name":  "God of War Digital Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333552/GOW_4_DELUXE_fv7gp6_gamzbv.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/315"
    },
    {
        "name":  "God of War III Remastered",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  21600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/GOW_3_REMASTERED_a4phaq_ry5kjg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/231"
    },
    {
        "name":  "God of War Ragnarök",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  44700,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/RAGNAROK_nxqx1r_bunrb4.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/12"
    },
    {
        "name":  "God of War Ragnarök Edición Digital Deluxe",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  68600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1765232507/ragnarok_deluxe_dm7giq.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/290"
    },
    {
        "name":  "God of War Sons of Sparta",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  36700,
        "tag":  "-26%",
        "img":  "https://res.cloudinary.com/dqkgurq8q/image/upload/v1771546084/GOD_OF_WAR_pknjnm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/560"
    },
    {
        "name":  "Gran Turismo® 7",
        "platform":  "PS5",
        "genre":  "Carreras Simulación",
        "price":  46200,
        "tag":  "-12%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/GRAN_TURISMO_7_gnsasl_dubkip.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/157"
    },
    {
        "name":  "Grand Theft Auto V",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  32700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/GTA_V_uaxpwf_nxunwi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/48"
    },
    {
        "name":  "Grand Theft Auto: The Trilogy - The Definitive Edition",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  30400,
        "tag":  "-24%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/GTA_V_TRILOGY_c6vksu_jqupf9.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/127"
    },
    {
        "name":  "Guardianes de la Noche -Kimetsu no Yaiba- Las Crónicas de Hinokami",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  24000,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/GUARDIANES_DE_LA_NOCHE_wnrb6n_osvdo7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/268"
    },
    {
        "name":  "Hell Let Loose",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  20700,
        "tag":  "-32%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1736180654/63814962220010b988698522e514e733321c3a7b45f0b005_vkfj22.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/253"
    },
    {
        "name":  "Hitman World of Assassination",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  43100,
        "tag":  "-13%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289710/HITMAN_qqq2sj_ga946g.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/460"
    },
    {
        "name":  "Hogwarts Legacy",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  17600,
        "tag":  "-37%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/dR9KJAKDW2izPbptHQbh3rnj_y6m2yi_ox2aku.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/6"
    },
    {
        "name":  "Hogwarts Legacy: Edición Digital Deluxe",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/HOGWARTS_DELUXE_fw1lsg_t4v011.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/159"
    },
    {
        "name":  "Hollow Knight Edición Corazón Vacío",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  22300,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1765827426/HOLOW_KNIGHT_1_quwnip.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/549"
    },
    {
        "name":  "Hollow Knight: Silksong",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  27900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289710/HOLLOW_dnnglm_yrgm9q.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/525"
    },
    {
        "name":  "Horizon Forbidden West™",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  46200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741010001/horizoon_hdm7yu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/401"
    },
    {
        "name":  "Horizon Zero Dawn™ Remastered",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  31100,
        "tag":  "-28%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1780083412/HORIZON_ZERO_DAWN_gzakda.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/582"
    },
    {
        "name":  "inFAMOUS Second Son",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/INFAMOU_SECOND_xvngdk_igzp8t.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/225"
    },
    {
        "name":  "It Takes Two",
        "platform":  "PS5",
        "genre":  "Único",
        "price":  21600,
        "tag":  "-16%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/IT_TAKES_TWO_nuc15n_xgrx85.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/90"
    },
    {
        "name":  "Jurassic World Evolution 2",
        "platform":  "PS5",
        "genre":  "Estrategia Simulación",
        "price":  35100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741009084/WZhQmSMCGEJgLHhnikOcuMnu_qvh8kr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/394"
    },
    {
        "name":  "Jurassic World Evolution 2: Edición Deluxe",
        "platform":  "PS5",
        "genre":  "Simulación Estrategia",
        "price":  36700,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/JW_2_DELUXE_EDITION_dea9by_lq0s4g.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/266"
    },
    {
        "name":  "Just Dance 2025 Edition",
        "platform":  "PS5",
        "genre":  "Casual Familia",
        "price":  47100,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1747753980/83e3833b218ef2b2dfe88b83811b35a14dc0e392f7b5ec80_pzwu6g.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/467"
    },
    {
        "name":  "La ascensión del Ronin™",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  57400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/ASC_RONIN_xsmrdn_fw2as8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/336"
    },
    {
        "name":  "La Tierra Media™: Paquete de las Sombras",
        "platform":  "PS5",
        "genre":  "Acción ROL/RPG",
        "price":  16000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336339/MIDDLE_BUNDLE_pxhuis_j5zcaq.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/165"
    },
    {
        "name":  "LEGO® Batman™: El Legado del Caballero de la Noche",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  106900,
        "tag":  "PRE-ORDER",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1777898393/LEGO_BATMAN_bkdgcp.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/576"
    },
    {
        "name":  "LEGO® Star Wars™ La saga de Skywalker",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  17600,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336339/LEGO_SKYWALKER_x9u5vw_quy2ac.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/162"
    },
    {
        "name":  "Lies of P",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  47100,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/LIES_OF_P_zxtmsd_rkxkwv.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/20"
    },
    {
        "name":  "Little Nightmares I y II ",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/NIGHTMARES_2_iywb6t_vcnsm3.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/155"
    },
    {
        "name":  "Little Nightmares III",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  43100,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289710/LN_3_kjyztp_a1256k.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/540"
    },
    {
        "name":  "Lords of the Fallen Deluxe Edition",
        "platform":  "PS5",
        "genre":  "ROL/RPG Acción",
        "price":  47100,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333554/LORDS_OF_THE_FALLEN_kix0fa_up4bqu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/341"
    },
    {
        "name":  "Lote Crash Bandicoot™: N. Sane Trilogy + CTR Nitro-Fueled",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  46200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/LOTE_CRASH_tomupt_xpxlk6.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/263"
    },
    {
        "name":  "Mad Max",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  12800,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333554/MAD_MAX_1_zed3kp_lfecvs.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/378"
    },
    {
        "name":  "Mafia: El Viejo Continente",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  54200,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289711/MAFIA_4_xjicau_y1496j.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/501"
    },
    {
        "name":  "Marvel’s Spider-Man 2",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  68600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/SPIDERMAN2_npjhpp_anfakw.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/16"
    },
    {
        "name":  "Marvel’s Wolverine",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  106900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1780583237/WOLVERINE_ue20m4.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/584"
    },
    {
        "name":  "Marvel\u0027s Spider-Man 2 Edición Digital Deluxe",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  78100,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289719/SPIDERMAN_2_DELUXE_zrpsas_kxz1wq.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/377"
    },
    {
        "name":  "Marvel\u0027s Spider-Man Remastered",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  39800,
        "tag":  "-11%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741008803/B2aUYFC0qUAkNnjbTHRyhrg3_ha75yb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/393"
    },
    {
        "name":  "Marvel\u0027s Spider-Man: Game of the Year Edition",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  22300,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/SPIDERMAN_1_GOTY_yrov7o_ah84lk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/387"
    },
    {
        "name":  "Marvel\u0027s Spider-Man: Miles Morales",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  32700,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/SPIDERMAN_MILES_MORALES_oxx9ei_ic2cst.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/138"
    },
    {
        "name":  "Marvel\u0027s Spider-Man: Miles Morales Edición Definitiva",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  49500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289712/MILES_MORALES_DEF_mmm9vf_x2cvdd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/518"
    },
    {
        "name":  "METAL GEAR SOLID Δ: SNAKE EATER",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  94200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333554/MGS_z2uyma_gqvnr3.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/352"
    },
    {
        "name":  "Minecraft",
        "platform":  "PS5",
        "genre":  "Aventura Arcade",
        "price":  30400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336341/MINECRAFT_tdhshj_rr2kel.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/153"
    },
    {
        "name":  "Monster Hunter Wilds",
        "platform":  "PS5",
        "genre":  "ROL/RPG",
        "price":  84500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333555/MH_WILDS_hvrkqy_djnd09.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/350"
    },
    {
        "name":  "Mortal Kombat 11",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  11200,
        "tag":  "-20%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/MK11_vq6tzw_nc8l1v.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/101"
    },
    {
        "name":  "Mortal Kombat 11 Ultimate",
        "platform":  "PS5",
        "genre":  "Fighting Único",
        "price":  16000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741009330/SbTOirUJUZ3oNQG0eGDZAuCr_ay8yr7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/397"
    },
    {
        "name":  "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition",
        "platform":  "PS5",
        "genre":  "Acción Fighting",
        "price":  22300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/MK11_INJUSTICE_2_usyeql_gpi2ve.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/92"
    },
    {
        "name":  "Mortal Kombat X",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  13500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336341/MK_X_htu8yc_zzpbck.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/152"
    },
    {
        "name":  "Mortal Kombat XL",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  12000,
        "tag":  "-17%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/MK_XL_d6fqaj_qp0l3n.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/271"
    },
    {
        "name":  "Mortal Kombat™ 1",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  18400,
        "tag":  "-39%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/MK1_yyzlfb_zjisyd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/8"
    },
    {
        "name":  "Mortal Kombat™ 1: Edición Definitiva",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  44700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1767965711/MK_1_EDICION_DEFINITIVA_plccjq.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/553"
    },
    {
        "name":  "Mortal Kombat™ 1: Kolección Reina el caos",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  51000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333555/MK_1_KAOS_REING_gebovs_qtdbag.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/368"
    },
    {
        "name":  "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289712/NARUTO_1_ncvnwc_vjvbra.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/521"
    },
    {
        "name":  "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS",
        "platform":  "PS5",
        "genre":  "Acción Fighting",
        "price":  36700,
        "tag":  "-22%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337802/NARUTO_ftbqex_gr4yyl.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/94"
    },
    {
        "name":  "NBA 2K25",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/NBA2K25_1_nx1gu2_er5jqr.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/213"
    },
    {
        "name":  "NBA 2K25 Edición All-Star",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  57400,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333555/NBA_2K25_ALLSTAR_1_tspnsk_nxublj.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/338"
    },
    {
        "name":  "NBA 2K25 Edición Torneo",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333556/NBA2K25_TORNEO_e7tart_wgko4m.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/369"
    },
    {
        "name":  "NBA 2K26",
        "platform":  "PS5",
        "genre":  "Deportes",
        "price":  20700,
        "tag":  "-33%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289713/NBA_2K26_odr1vm_gkn7x7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/523"
    },
    {
        "name":  "Need for Speed™ Heat",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  15500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_HEAT_ehpnbe_khijym.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/103"
    },
    {
        "name":  "Need for Speed™ Heat Edición Deluxe",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  14300,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_HEAT_DELUXE_ch1otb_dnsm9a.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/99"
    },
    {
        "name":  "Need for Speed™ Payback",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  13500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_PAYBACK_i0n954_ng5krs.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/106"
    },
    {
        "name":  "Need for Speed™ Rivals",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  11200,
        "tag":  "-13%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_RIVALS_o84kes_ilpzpm.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/108"
    },
    {
        "name":  "Need for Speed™ Unbound",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  17600,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/NFS_UNBOUND_lfbqt6_v532n6.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/117"
    },
    {
        "name":  "Nioh 3",
        "platform":  "PS5",
        "genre":  "Acción ROL/RPG",
        "price":  79000,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dqkgurq8q/image/upload/v1770476612/NIOH_3_pgaq2m.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/559"
    },
    {
        "name":  "No Man\u0027s Sky",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  36700,
        "tag":  "-8%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289714/no_man_sky_gfn9gc_jnbjot.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/295"
    },
    {
        "name":  "Outlast: Trinity",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  16700,
        "tag":  "-25%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/OUTLAS_TRINITY_sjk2e4_zlhshz.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/61"
    },
    {
        "name":  "Overcooked! + Overcooked! 2",
        "platform":  "PS5",
        "genre":  "Familia Casual",
        "price":  19900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289715/OC_2_xlvcsp_joga63.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/471"
    },
    {
        "name":  "Overcooked! 2",
        "platform":  "PS5",
        "genre":  "Casual Familia",
        "price":  14100,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289716/OVERCOOKED2_1_k0zl68_z4buih.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/463"
    },
    {
        "name":  "Overcooked! 2 - Gourmet Edition",
        "platform":  "PS5",
        "genre":  "Casual Familia",
        "price":  16000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333557/OC_2_GOURMET_wl9uvm_nxqykz.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/317"
    },
    {
        "name":  "Pack triple de Resident Evil",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336343/RACCON_CITY_qpqj1v_ba3jqu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/134"
    },
    {
        "name":  "Paquete de Familia EA",
        "platform":  "PS5",
        "genre":  "Aventura Carreras",
        "price":  15200,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/PAQUETE_EA_tijdax_urbo7h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/150"
    },
    {
        "name":  "Paquete de juegos LEGO®",
        "platform":  "PS5",
        "genre":  "Único",
        "price":  17600,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741009772/11307z4N5igu3IQAbq_kcEW3Hr8dywi6x2cH6R089EKQzAnAjsKkd2fcj9Xi4lcATphK4Y-QhIHHnaUWMxiBRKPUhUQeNdNX_to2eld.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/399"
    },
    {
        "name":  "Paquete de la saga Metro",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  12800,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/METRO_SAGA_twmbke_cqab9o.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/80"
    },
    {
        "name":  "PAYDAY 2: CRIMEWAVE EDITION",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  11200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/PAYDAY_2_CRIMEWAVE_igk2bh_nmgxzc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/147"
    },
    {
        "name":  "Payday 3",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  28700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/PAYDAY_3_mynfsy_ouepka.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/105"
    },
    {
        "name":  "Phasmophobia",
        "platform":  "PS5",
        "genre":  "Terror Ingenio",
        "price":  23100,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dhksrsfkh/image/upload/v1742930720/Phasmophobia_zkfths.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/449"
    },
    {
        "name":  "Plants vs. Zombies™ Garden Warfare 2: Edición Standard",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  15500,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1766787740/PVZ_2_1_bn1eni.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/258"
    },
    {
        "name":  "Plants vs. Zombies™: Replanted",
        "platform":  "PS5",
        "genre":  "Estrategia",
        "price":  21600,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289716/PLANTS_VS_ZOMBIES_REPLANTED_hqelbi_aheute.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/538"
    },
    {
        "name":  "Poppy Playtime: Capítulo 1",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  7900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333558/POPPY_PT_C1_ep3fcw_qsrvov.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/331"
    },
    {
        "name":  "Poppy Playtime: Capítulo 2",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  11200,
        "tag":  "-42%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333558/POPPY_PT_CP2_zmledh_naqyxb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/332"
    },
    {
        "name":  "Poppy Playtime: Capítulo 3",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  14300,
        "tag":  "-36%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333558/POPPY_PT_CP3_git8w8_s0avo9.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/335"
    },
    {
        "name":  "Poppy Playtime: Capítulo 4",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  18400,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1775824793/POPPY_PLAYTIME_4_ocvhm8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/568"
    },
    {
        "name":  "PRAGMATA",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  92500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1777038202/PRAGMATA_j6ber4.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/571"
    },
    {
        "name":  "RACCOON CITY EDITION",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  33400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289717/raccoon_city_utaqgh_yvw760.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/260"
    },
    {
        "name":  "Ratchet \u0026 Clank™",
        "platform":  "PS5",
        "genre":  "Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1773490129/RATCHET_AND_CLANK_dt4wnd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/565"
    },
    {
        "name":  "REANIMAL",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  62300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1776949684/REANIMAL_oceslf.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/570"
    },
    {
        "name":  "Red Dead Redemption",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  38300,
        "tag":  "-14%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333558/RDR1_1_jbwvly_dthmqa.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/291"
    },
    {
        "name":  "Red Dead Redemption 2",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  24000,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/RDR2_ljmgmx_e0to9o.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/214"
    },
    {
        "name":  "Red Dead Redemption 2: Edición Definitiva",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  33400,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/RDR2_DE_v0k2pb_mt0mto.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/203"
    },
    {
        "name":  "Resident Evil 4 Gold Edition ",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  43100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333559/RESIDEN_EVIL_4_GOLD_duuvw8_htkci8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/287"
    },
    {
        "name":  "Resident Evil 4 Remake",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  18400,
        "tag":  "-48%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/RESIDENT_EVIL_4_ezngpc_piovla.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/14"
    },
    {
        "name":  "RESIDENT EVIL 5",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  10300,
        "tag":  "-7%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/RESIDENT_EVIL_5_mrzint_iioyyg.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/230"
    },
    {
        "name":  "RESIDENT EVIL 7 biohazard",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  16000,
        "tag":  "-29%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/RESIDENT_EVIL_BIOHAZARD_vxi96z_qk9mxx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/110"
    },
    {
        "name":  "Resident Evil Requiem",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  86100,
        "tag":  "-18%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1769258607/RE_9_g6jvrh.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/557"
    },
    {
        "name":  "Resident Evil Village",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  17600,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336351/VILLAGE_STANDAR_icmrtb_bucmnd.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/232"
    },
    {
        "name":  "Resident Evil Village Gold Edition",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  32700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336351/VILLAGE_cxv3gt_cgosuu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/130"
    },
    {
        "name":  "SAROS",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  104500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1777038202/SAROS_btr0vd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/573"
    },
    {
        "name":  "Sekiro™: Shadows Die Twice - Edición Juego del Año",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  41500,
        "tag":  "-10%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/SEKIRO_qmxqij_aptufj.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/26"
    },
    {
        "name":  "SHADOW OF THE COLOSSUS",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  21600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336344/SHADOW_OTC_lbiv0p_sefubn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/205"
    },
    {
        "name":  "Shadow of the Tomb Raider Definitive Edition",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  16700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1736091648/icon0_pjufzz.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/251"
    },
    {
        "name":  "Sid Meier’s Civilization® VII",
        "platform":  "PS5",
        "genre":  "Estrategia",
        "price":  84500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333550/CIVILIZATION_VII_tzjlnt_he4tbk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/357"
    },
    {
        "name":  "SILENT HILL 2",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  54200,
        "tag":  "-14%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/SILENT_HILL_2_ucoeqr_bugfg2.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/15"
    },
    {
        "name":  "Silent Hill f",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  57400,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289719/SILENT_HILL_F_ln1ny4_f7k267.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/534"
    },
    {
        "name":  "Sleeping Dogs™ Definitive Edition",
        "platform":  "PS5",
        "genre":  "Acción Fighting",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337806/SLEEPIN_DOGS_khnefz_keve6j.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/118"
    },
    {
        "name":  "Slime Rancher",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  11200,
        "tag":  "-33%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333559/SLIME_RANCHER_hpevpy_zol3lz.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/318"
    },
    {
        "name":  "Sniper Elite 4",
        "platform":  "PS5",
        "genre":  "Aventura Shooter",
        "price":  14100,
        "tag":  "-12%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336346/SNIPER_ELITE_4_dulzgh_vi1qoo.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/240"
    },
    {
        "name":  "Sniper Elite 5",
        "platform":  "PS5",
        "genre":  "Shooter",
        "price":  31100,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337807/SNIPER_ELITE_5_n4gpkv_fmjujf.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/113"
    },
    {
        "name":  "SnowRunner",
        "platform":  "PS5",
        "genre":  "Arcade Carreras",
        "price":  31900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/SNOWRUNNER_w969vx_mpyzsb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/246"
    },
    {
        "name":  "STAR WARS Jedi: La Orden caída™",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  14300,
        "tag":  "-22%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/JEDI_FALLEN_qwyok2_savzg0.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/140"
    },
    {
        "name":  "STAR WARS™ Battlefront™ II",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  15500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336336/BATTLEFRONT_2_mnbyjf_dzjlo9.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/135"
    },
    {
        "name":  "Starfield",
        "platform":  "PS5",
        "genre":  "ROL/RPG",
        "price":  79000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1777038202/STARFIELD_zrsypi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/572"
    },
    {
        "name":  "Stellar Blade™",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  60600,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289719/STELLAR_BLADE_uuglov_a8uthe.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/450"
    },
    {
        "name":  "Subnautica",
        "platform":  "PS5",
        "genre":  "Único",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289720/SUBNAUTICA_ojey8j_n3ozwg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/392"
    },
    {
        "name":  "Subnautica: Below Zero",
        "platform":  "PS5",
        "genre":  "Único",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289720/SUBNAUTICA_BELOW_bgmyve_rnvjhe.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/389"
    },
    {
        "name":  "Terraria: PS4™ Edition",
        "platform":  "PS5",
        "genre":  "Aventura ROL/RPG",
        "price":  17600,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289721/TERRARIA_1_nzcmuz_rpbpqe.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/529"
    },
    {
        "name":  "The Crew Motorfest",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  35100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/THE_CREW_MOTORFEST_rrurhd_c9lnkp.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/17"
    },
    {
        "name":  "The Crew Motorfest Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  30400,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333555/MOTORFEST_DELUXE_vhtyai_nbazu3.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/313"
    },
    {
        "name":  "The Elder Scrolls V: Skyrim Anniversary Edition",
        "platform":  "PS5",
        "genre":  "ROL/RPG Acción",
        "price":  26300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/SKYRIM_ANIV_g6y2jx_zndnvg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/97"
    },
    {
        "name":  "The Elder Scrolls V: Skyrim Special Edition",
        "platform":  "PS5",
        "genre":  "ROL/RPG",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337804/SKYRIM_n3oyhl_zofo85.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/115"
    },
    {
        "name":  "The Evil Within 2",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  16000,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289721/THE_EVIL_WITHIN_2_edc5qe_fn6bp8.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/456"
    },
    {
        "name":  "The Evil Within Digital Bundle",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  16000,
        "tag":  "-31%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/THE_EVIL_WITHIN_fadln5_w36gp3.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/143"
    },
    {
        "name":  "THE FOREST",
        "platform":  "PS5",
        "genre":  "Aventura Terror",
        "price":  12800,
        "tag":  "-20%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/THE_FOREST_mt1z5j_ojo1vb.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/144"
    },
    {
        "name":  "THE KING OF FIGHTERS XV Edición Deluxe",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289722/TKOF_XV_DELUXE_sfse7l_cycqnc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/382"
    },
    {
        "name":  "THE KING OF FIGHTERS XV Edición Estándar",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336338/KOF_XV_cdjyr6_s34hmy.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/275"
    },
    {
        "name":  "The Last of Us Part II (GRAFICOS PS4)",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  44700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/TLOU_PARTE_2_jgbhvh_g2jdhb.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/473"
    },
    {
        "name":  "The Last of Us Part II Digital Deluxe Edition [GRÁFICOS PS4]",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  46200,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289723/TLOU_2_DIGITAL_ufnak3_g45ymi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/514"
    },
    {
        "name":  "The Last of Us™ Part I",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  47100,
        "tag":  "-11%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/TLOU_PARTE_1_ierpls_bnviux.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/202"
    },
    {
        "name":  "The Last of Us™ Part I Digital Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  63000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289724/TLOU_DELUXE_rtjfab_qgi99z.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/320"
    },
    {
        "name":  "The Last of Us™ Part II Remastered",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  49500,
        "tag":  "-22%",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1739731340/The-last-of-us-part-ii-remastered-packshot-01-26feb24_en_kry2tx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/374"
    },
    {
        "name":  "The Last Of Us™ Remastered (GRAFICOS PS4)",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  16700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/TLOU_REMASTERED_igk8kj_o5pask.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/472"
    },
    {
        "name":  "The Outlast Trials",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  18400,
        "tag":  "-28%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289715/OUTLAST_DELUXE_otpf8c_zlmhtn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/510"
    },
    {
        "name":  "The Outlast Trials Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1767874469/OUTLAS_TRIAL_DELUXE_jftca0.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/465"
    },
    {
        "name":  "The Quarry",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  16700,
        "tag":  "-13%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336347/THE_QUARRY_ur4xxw_twdwqk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/280"
    },
    {
        "name":  "The Quarry - Edición Deluxe",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  19100,
        "tag":  "-23%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333559/THE_QUARRY_DELUXE_1_re3txq_mhshu9.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/381"
    },
    {
        "name":  "The Warriors®",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  16700,
        "tag":  "-19%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289722/THE_WARRIORS_vjgywv_fapy81.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/376"
    },
    {
        "name":  "The Witcher 3: Wild Hunt – Complete Edition",
        "platform":  "PS5",
        "genre":  "Acción ROL/RPG",
        "price":  18400,
        "tag":  "-15%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336351/WITCHER_3_COMPLETE_uzn1pw_n1dumy.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/128"
    },
    {
        "name":  "Tom Clancy’s Ghost Recon Wildlands Ultimate Edition",
        "platform":  "PS5",
        "genre":  "Acción",
        "price":  38300,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333562/WIDLANDS_ULTIMATE_1_gej1xh_sqrhop.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/342"
    },
    {
        "name":  "Tom Clancy’s Ghost Recon® Wildlands Standard Edition",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  30400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333553/GR_WIDLANDS_odyumz_lev0gg.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/311"
    },
    {
        "name":  "Tom Clancy\u0027s Ghost Recon® Breakpoint",
        "platform":  "PS5",
        "genre":  "Acción Shooter",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337795/BREAKPOINT_at5qw4_wuo63h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/89"
    },
    {
        "name":  "Tomb Raider: Definitive Survivor Trilogy",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  22300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764800512/TOMB_RAIDER_1_lmjukk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/548"
    },
    {
        "name":  "Trilogía Mafia",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  17600,
        "tag":  "-27%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/MAFIA_TRILOGY_cod0w6_lbb2qo.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/228"
    },
    {
        "name":  "UFC™ 6",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  110900,
        "tag":  "PRE-ORDER",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1777329178/UFC_6_n2vojt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/574"
    },
    {
        "name":  "UNCHARTED 4: El final de un ladrón y Uncharted: The Lost Legacy Paquete digital",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  34300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/UNCHARTED_DIGITAL_admduo_kwmmej.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/274"
    },
    {
        "name":  "UNCHARTED The Nathan Drake Collection",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336348/UNCHARTED_COLECCTION_iqmgsa_zwbdcm.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/551"
    },
    {
        "name":  "UNCHARTED: Colección Legado de ladrones",
        "platform":  "PS5",
        "genre":  "Aventura Acción",
        "price":  34300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337806/UNCHARTED_PACK_neaklu_efzal4.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/96"
    },
    {
        "name":  "Undisputed",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  71700,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1736180243/3c1a52a8c2497b76cbd89813c9f8f0abe5d224a23fbc29ad_lqaecv.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/252"
    },
    {
        "name":  "Until Dawn™",
        "platform":  "PS5",
        "genre":  "Terror",
        "price":  47100,
        "tag":  "-30%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333561/ULTIN_DAWN_1_r5lstf_fguphn.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/344"
    },
    {
        "name":  "Watch Dogs 1 + Watch Dogs 2 Gold Editions Bundle",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  31100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333562/WD_1_Y_2_leekci_kiqm39.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/325"
    },
    {
        "name":  "Watch Dogs 2 Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  27100,
        "tag":  "-11%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333562/WD_2_DELUXE_i02o0u_lgmrsr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/321"
    },
    {
        "name":  "Watch Dogs: Legion - Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/WDLDE_fahtwe_fdqu9j.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/41"
    },
    {
        "name":  "Watch Dogs®: Legion",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  16000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/WDL_bt65ri_iqpxqb.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/39"
    },
    {
        "name":  "Watch Dogs®2",
        "platform":  "PS5",
        "genre":  "Acción Aventura",
        "price":  16000,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/WD2_nk4tpq_nte7dd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/43"
    },
    {
        "name":  "WATCH_DOGS™ COMPLETE EDITION",
        "platform":  "PS5",
        "genre":  "Aventura Acción",
        "price":  12000,
        "tag":  "-21%",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339589/WDEC_b1bunt_esjckn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/215"
    },
    {
        "name":  "WRC 10 FIA World Rally Championship Deluxe Edition",
        "platform":  "PS5",
        "genre":  "Carreras",
        "price":  21600,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333563/WRC_10_DELUXE_nw0tpf_nmj4dg.png",
        "sourceUrl":  "https://www.lepritastore.com/detail/326"
    },
    {
        "name":  "WWE 2K24",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  36700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337807/WWE_2K24_qj9v6g_gyjfel.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/122"
    },
    {
        "name":  "WWE 2K25",
        "platform":  "PS5",
        "genre":  "Fighting",
        "price":  49500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333563/WWE2K25_rzgn6o_civdhd.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/353"
    },
    {
        "name":  "Yakuza: Like a Dragon",
        "platform":  "PS5",
        "genre":  "Único",
        "price":  20700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339590/YAKUZA_eomkp3_opkmhc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/47"
    }
];

    // PS PLUS
    const psPlusProducts = [
    {
        "name":  "PlayStation Plus Essential 1 Mes",
        "platform":  "PS PLUS",
        "genre":  "PS5 / PS4",
        "price":  40700,
        "pricePs5":  40700,
        "pricePs4":  40700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764507927/kqlrftx0c7b8vhu9fyoj_wkircr_k0m1ay.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/34"
    },
    {
        "name":  "PlayStation Plus Essential 12 Meses",
        "platform":  "PS PLUS",
        "genre":  "PS5 / PS4",
        "price":  60000,
        "pricePs5":  60000,
        "pricePs4":  60000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764507921/img_05161-4cd38076167b27e5ae16935122796578-1024-1024_uwnjvv_1_ovzt86_txkemr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/33"
    },
    {
        "name":  "PlayStation Plus Essential 3 Meses",
        "platform":  "PS PLUS",
        "genre":  "PS5 / PS4",
        "price":  25000,
        "pricePs5":  25000,
        "pricePs4":  25000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764507921/img_3980-19aebbba92f234ab8517018890090408-1024-1024_g5skxr_1_yscg76_mdz5bu.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/32"
    },
    {
        "name":  "PlayStation Plus Extra 1 Mes",
        "platform":  "PS PLUS",
        "genre":  "PS5 / PS4",
        "price":  38900,
        "pricePs5":  38900,
        "pricePs4":  38900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764507918/ezddgjlo00vhmg4v0glq_ynb1fn_eexlgq.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/30"
    },
    {
        "name":  "PlayStation Plus Deluxe 12 Meses",
        "platform":  "PS PLUS",
        "genre":  "PS5 / PS4",
        "price":  70000,
        "pricePs5":  70000,
        "pricePs4":  70000,
        "tag":  "-17%",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764507921/img_24421-324a48b09b1ee32b9a16935123918990-1024-1024_mspdrs_1_omle4d_sollez.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/35"
    },
    {
        "name":  "PlayStation Plus Deluxe 12 Meses",
        "platform":  "PS PLUS",
        "genre":  "PS5 / PS4",
        "price":  80000,
        "pricePs5":  80000,
        "pricePs4":  80000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlkrgovxt/image/upload/v1732294017/img_24571-b582a4714a459e642b16935123433981-1024-1024_ibbuun_1_rwupkq.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/29"
    },
    {
        "name":  "PlayStation Plus Deluxe 3 Meses",
        "platform":  "PS PLUS",
        "genre":  "PS5 / PS4",
        "price":  45000,
        "pricePs5":  45000,
        "pricePs4":  45000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764507947/WhatsApp_Image_2024-11-22_at_16.05.43_guvctl_kyalrw.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/36"
    },
    {
        "name":  "PlayStation Plus Extra 3 Meses",
        "platform":  "PS PLUS",
        "genre":  "PS5 / PS4",
        "price":  40000,
        "pricePs5":  40000,
        "pricePs4":  40000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764507921/img_3983-7781756f6fe8eb3a8e17018891780921-1024-1024_atbt00_1_yaiutb_ltvene.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/5"
    }
    ];
// GIFT CARDS
    const giftCardProducts = [];

    // STEAM
    const steamProducts = [
    {
        "name":  "Age of Empires II: Definitive Edition Steam Key GLOBAL",
        "platform":  "STEAM",
        "genre":  "Estrategia",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333550/AOE_2_s9a7s9_myteum.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/434"
    },
    {
        "name":  "Age of Empires III: Definitive Edition",
        "platform":  "STEAM",
        "genre":  "Estrategia",
        "price":  22300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/AOE_3_mrczwb_h1hlp1.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/435"
    },
    {
        "name":  "Age of Empires: Definitive Edition ",
        "platform":  "STEAM",
        "genre":  "Estrategia",
        "price":  17600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/AOE_1_q11o54_xbklsu.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/437"
    },
    {
        "name":  "Assetto Corsa ",
        "platform":  "STEAM",
        "genre":  "Carreras",
        "price":  15500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333551/ASSETO_CORSA_btgqfa_auefwm.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/436"
    },
    {
        "name":  "Batman: Arkham Collection",
        "platform":  "STEAM",
        "genre":  "Acción Aventura",
        "price":  15200,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337794/BATMAN_ARKHAM_qrdhrp_qdmduk.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/407"
    },
    {
        "name":  "BEYOND: Two Souls™",
        "platform":  "STEAM",
        "genre":  "Acción Aventura",
        "price":  15500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289701/BEYOND_lvim5f_zyfs12.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/429"
    },
    {
        "name":  "Borderlands 3",
        "platform":  "STEAM",
        "genre":  "Acción Shooter",
        "price":  15500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339530/BORDERLANDS_3_vmrkzu_cblwce.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/424"
    },
    {
        "name":  "Captain Tsubasa: Rise of New Champions",
        "platform":  "STEAM",
        "genre":  "Deportes",
        "price":  18400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlkrgovxt/image/upload/v1732901115/CAPTAIN_SUBASA_mgjo3t.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/425"
    },
    {
        "name":  "DARK SOULS™ II: Scholar of the First Sin",
        "platform":  "STEAM",
        "genre":  "ROL/RPG Aventura",
        "price":  35100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339533/DARK_SOULS_2_mqg0ti_vacp31.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/427"
    },
    {
        "name":  "DARK SOULS™ III",
        "platform":  "STEAM",
        "genre":  "Aventura ROL/RPG",
        "price":  57400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339585/DARK_SOULS_3_u5sbor_zr4wbn.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/419"
    },
    {
        "name":  "DARK SOULS™: REMASTERED",
        "platform":  "STEAM",
        "genre":  "ROL/RPG",
        "price":  51000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339584/DARK_SOULS_REMASTERED_insag8_wsajws.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/412"
    },
    {
        "name":  "DayZ",
        "platform":  "STEAM",
        "genre":  "Aventura Shooter",
        "price":  57400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1736995763/icon0_1_xctand.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/405"
    },
    {
        "name":  "Dead by Daylight",
        "platform":  "STEAM",
        "genre":  "Terror",
        "price":  23100,
        "tag":  "SIN STOCK",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289703/DEAD_BY_DAYLIGHT_emtdk9_jejccx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/432"
    },
    {
        "name":  "Detroit: Become Human",
        "platform":  "STEAM",
        "genre":  "Aventura Acción",
        "price":  24000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/DETROIT_twrkqw_j1krm0.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/418"
    },
    {
        "name":  "DRAGON BALL XENOVERSE 2",
        "platform":  "STEAM",
        "genre":  "Fighting",
        "price":  19900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337796/DBZ_XENOVERSE_2_n1qmej_ms0q0h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/423"
    },
    {
        "name":  "Farming Simulator 22 ",
        "platform":  "STEAM",
        "genre":  "Simulación",
        "price":  23100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289706/FARMING_22_whfc1e_yfqu1g.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/433"
    },
    {
        "name":  "God of War",
        "platform":  "STEAM",
        "genre":  "Aventura",
        "price":  57400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337797/GOD_OF_WAR_dgslwd_wuja4h.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/411"
    },
    {
        "name":  "Hogwarts Legacy",
        "platform":  "STEAM",
        "genre":  "Aventura",
        "price":  38300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339586/dR9KJAKDW2izPbptHQbh3rnj_y6m2yi_ox2aku.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/416"
    },
    {
        "name":  "Hogwarts Legacy: Edición Digital Deluxe",
        "platform":  "STEAM",
        "genre":  "Aventura",
        "price":  44700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336337/HOGWARTS_DELUXE_fw1lsg_t4v011.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/417"
    },
    {
        "name":  "Jurassic World Evolution 2",
        "platform":  "STEAM",
        "genre":  "Simulación",
        "price":  27100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741009084/WZhQmSMCGEJgLHhnikOcuMnu_qvh8kr.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/422"
    },
    {
        "name":  "Little Nightmares Complete Edition",
        "platform":  "STEAM",
        "genre":  "Único",
        "price":  17600,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289713/NIGHTMARES_COMPLETE_dimlzw_qbqlgd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/430"
    },
    {
        "name":  "Monster Hunter Wilds",
        "platform":  "STEAM",
        "genre":  "ROL/RPG",
        "price":  81400,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764333555/MH_WILDS_hvrkqy_djnd09.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/462"
    },
    {
        "name":  "Mortal Kombat 11",
        "platform":  "STEAM",
        "genre":  "Fighting",
        "price":  12800,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/MK11_vq6tzw_nc8l1v.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/406"
    },
    {
        "name":  "Mortal Kombat 11 Ultimate",
        "platform":  "STEAM",
        "genre":  "Fighting",
        "price":  23100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dwpwajwa9/image/upload/v1741009330/SbTOirUJUZ3oNQG0eGDZAuCr_ay8yr7.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/414"
    },
    {
        "name":  "Mortal Kombat X",
        "platform":  "STEAM",
        "genre":  "Fighting",
        "price":  10300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336341/MK_X_htu8yc_zzpbck.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/415"
    },
    {
        "name":  "Mortal Kombat XL",
        "platform":  "STEAM",
        "genre":  "Fighting",
        "price":  16000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/MK_XL_d6fqaj_qp0l3n.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/421"
    },
    {
        "name":  "Mortal Kombat™ 1",
        "platform":  "STEAM",
        "genre":  "Fighting",
        "price":  41500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/MK1_yyzlfb_zjisyd.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/413"
    },
    {
        "name":  "NBA 2K25",
        "platform":  "STEAM",
        "genre":  "Deportes",
        "price":  49500,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/NBA2K25_1_nx1gu2_er5jqr.avif",
        "sourceUrl":  "https://www.lepritastore.com/detail/408"
    },
    {
        "name":  "Outlast 2",
        "platform":  "STEAM",
        "genre":  "Terror",
        "price":  10300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289715/OUTLAST_2_jju969_kvqoqt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/428"
    },
    {
        "name":  "Resident Evil 4 Remake",
        "platform":  "STEAM",
        "genre":  "Terror",
        "price":  47100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/RESIDENT_EVIL_4_ezngpc_piovla.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/410"
    },
    {
        "name":  "Resident Evil 6",
        "platform":  "STEAM",
        "genre":  "Terror",
        "price":  16000,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289718/RESIDENT_EVIL_6_rcnzdz_hevjfc.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/431"
    },
    {
        "name":  "RESIDENT EVIL 7 biohazard",
        "platform":  "STEAM",
        "genre":  "Terror",
        "price":  22300,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337803/RESIDENT_EVIL_BIOHAZARD_vxi96z_qk9mxx.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/409"
    },
    {
        "name":  "Resident Evil Village",
        "platform":  "STEAM",
        "genre":  "Terror",
        "price":  35100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336351/VILLAGE_STANDAR_icmrtb_bucmnd.jpg",
        "sourceUrl":  "https://www.lepritastore.com/detail/420"
    },
    {
        "name":  "Trilogía Mafia",
        "platform":  "STEAM",
        "genre":  "Acción Aventura",
        "price":  31900,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337798/MAFIA_TRILOGY_cod0w6_lbb2qo.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/426"
    },
    {
        "name":  "WWE 2K24",
        "platform":  "STEAM",
        "genre":  "Fighting",
        "price":  44700,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dlzxpobvr/image/upload/v1764337807/WWE_2K24_qj9v6g_gyjfel.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/448"
    }
];

    // ROCKSTAR
    const rockstarProducts = [
    {
        "name":  "Bully",
        "platform":  "ROCKSTAR",
        "genre":  "Aventura Acción",
        "price":  19100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764289702/BULLY_yubgdz_bfrvmt.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/444"
    },
    {
        "name":  "Grand Theft Auto V",
        "platform":  "ROCKSTAR",
        "genre":  "Acción Aventura",
        "price":  35100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339587/GTA_V_uaxpwf_nxunwi.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/440"
    },
    {
        "name":  "Red Dead Redemption 2",
        "platform":  "ROCKSTAR",
        "genre":  "Aventura Acción",
        "price":  47100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/RDR2_ljmgmx_e0to9o.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/442"
    },
    {
        "name":  "Red Dead Redemption 2: Ultimate Edition",
        "platform":  "ROCKSTAR",
        "genre":  "Acción Aventura",
        "price":  47100,
        "tag":  "COMPRAR",
        "img":  "https://res.cloudinary.com/dltl3cge3/image/upload/v1764336342/RDR2_DE_v0k2pb_mt0mto.webp",
        "sourceUrl":  "https://www.lepritastore.com/detail/443"
    }
];

    // PRODUCTOS EXCLUSIVOS / OTROS
    const exclusiveProducts = [];

    const products = [
      ...ps4Products,
      ...ps5Products,
      ...psPlusProducts,
      ...giftCardProducts,
      ...steamProducts,
      ...exclusiveProducts
    ];
const categories = ["Todos", "PS4", "PS5", "PS PLUS", "STEAM"];
    // CARRUSEL PRINCIPAL
    // Cambia image, title, text y cta para editar cada banner.
    const promoSlides = [
      {
        image:"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1800&auto=format&fit=crop",
        alt:"Setup PC gamer con monitor y luces",
        kicker:"PC · Steam · Keys digitales",
        title:"Juegos para PC y Steam",
        text:"Codigos digitales, juegos tendencia y atencion directa para activar tu compra sin vueltas.",
        cta:"Ver Steam",
        link:"#catalogo"
      },
      {
        image:"https://res.cloudinary.com/dltl3cge3/image/upload/v1764289703/COD_BO_7_y2lncg_n3f15t.webp",
        alt:"Call of Duty Black Ops 7",
        kicker:"Tendencia · Shooter",
        title:"Call of Duty Black Ops 7",
        text:"Accion multigeneracion para PS5 con entrega digital rapida por WhatsApp.",
        cta:"Ver juegos PS5",
        link:"#catalogo"
      },
      {
        image:"https://res.cloudinary.com/dltl3cge3/image/upload/v1764339588/SPIDERMAN2_npjhpp_anfakw.avif",
        alt:"Marvel Spider-Man 2",
        kicker:"PS5 · Aventura",
        title:"Marvel's Spider-Man 2",
        text:"Uno de los mas buscados del catalogo, listo para sumar a tu biblioteca digital.",
        cta:"Ver PS5",
        link:"#catalogo"
      },
      {
        image:"https://res.cloudinary.com/dltl3cge3/image/upload/v1764289713/NBA_2K26_odr1vm_gkn7x7.webp",
        alt:"NBA 2K26",
        kicker:"Deportes · Oferta",
        title:"NBA 2K26",
        text:"Juegos populares, ofertas semanales y compra directa desde el carrito.",
        cta:"Ver ofertas",
        link:"#catalogo"
      }
    ];
    let activePromoSlide = 0;
    const promoBanner = document.querySelector("#promoBanner");
    const promoImage = document.querySelector("#promoImage");
    const promoKicker = document.querySelector("#promoKicker");
    const promoTitle = document.querySelector("#promoTitle");
    const promoText = document.querySelector("#promoText");
    const promoCta = document.querySelector("#promoCta");
    const promoDots = document.querySelector("#promoDots");

    function renderPromoSlide(index){
      if (!promoBanner || !promoImage) return;
      activePromoSlide = (index + promoSlides.length) % promoSlides.length;
      const slide = promoSlides[activePromoSlide];
      promoBanner.classList.add("is-changing");
      window.setTimeout(() => {
        promoImage.src = slide.image;
        promoImage.alt = slide.alt;
        promoKicker.textContent = slide.kicker;
        promoTitle.textContent = slide.title;
        promoText.textContent = slide.text;
        promoCta.textContent = slide.cta;
        promoBanner.href = slide.link;
        promoDots.querySelectorAll("button").forEach((dot, dotIndex) => {
          dot.classList.toggle("active", dotIndex === activePromoSlide);
        });
        promoBanner.classList.remove("is-changing");
      }, 120);
    }

    document.querySelector("#promoPrev")?.addEventListener("click", () => renderPromoSlide(activePromoSlide - 1));
    document.querySelector("#promoNext")?.addEventListener("click", () => renderPromoSlide(activePromoSlide + 1));
    promoDots?.querySelectorAll("button").forEach((dot, index) => {
      dot.addEventListener("click", () => renderPromoSlide(index));
    });
    window.setInterval(() => renderPromoSlide(activePromoSlide + 1), 6500);
    let activeCategory = "Todos";
    let cart = [];

    const money = value => "$" + value.toLocaleString("es-AR");
    const productsEl = document.querySelector("#products");
    const filtersEl = document.querySelector("#filters");
    const searchEl = document.querySelector("#search");
    const loadMoreBtn = document.querySelector("#loadMore");
    const drawer = document.querySelector("#drawer");
    const cartItems = document.querySelector("#cartItems");
    const cartCount = document.querySelector("#cartCount");
    const totalEl = document.querySelector("#total");
    const reviewComment = document.querySelector("#reviewComment");
    const charCount = document.querySelector("#charCount");
    const ratingScore = document.querySelector("#ratingScore");
    const reviewStatus = document.querySelector("#reviewStatus");
    const reviewWall = document.querySelector(".review-wall");
    const reviewToggle = document.querySelector("#reviewToggle");
    const reviewImage = document.querySelector("#reviewImage");
    const fileName = document.querySelector("#fileName");
    const gameDetail = document.querySelector("#gameDetail");
    const productLoader = document.querySelector("#productLoader");
    const detailBack = document.querySelector("#detailBack");
    const detailImg = document.querySelector("#detailImg");
    const detailName = document.querySelector("#detailName");
    const detailPlatform = document.querySelector("#detailPlatform");
    const detailGenre = document.querySelector("#detailGenre");
    const detailTags = document.querySelector("#detailTags");
    const detailDescription = document.querySelector("#detailDescription");
    const detailSpecs = document.querySelector("#detailSpecs");
    const primaryPrice = document.querySelector("#primaryPrice");
    const secondaryPrice = document.querySelector("#secondaryPrice");
    const detailAdd = document.querySelector("#detailAdd");
    const accountOptions = document.querySelectorAll(".account-option");
    let selectedRating = 5;
    let selectedImageData = "";
    let selectedDetailProduct = null;
    let selectedAccountType = "";
    let memoryReviews = [];
    let visibleProductCount = 24;
    const reviewStorage = {
      get(){
        try {
          return JSON.parse(window.localStorage.getItem("customerReviews") || "[]");
        } catch (error) {
          return memoryReviews;
        }
      },
      set(reviews){
        memoryReviews = reviews;
        try {
          window.localStorage.setItem("customerReviews", JSON.stringify(reviews));
        } catch (error) {}
      }
    };
    const defaultReviews = [
      {text:"Todo perfecto, lo active en la cuenta sin problema y respondieron rapido.", author:"Cliente PS5", rating:5},
      {text:"Compre PS Plus y me guiaron paso a paso. Muy recomendable.", author:"Cliente PS Plus", rating:5},
      {text:"La gift card llego al toque. Precio claro y buena atencion.", author:"Cliente Gift Card", rating:5},
      {text:"Tenia dudas con la plataforma y me ayudaron antes de pagar.", author:"Cliente PS4", rating:5},
      {text:"Ya compre varias veces. Siempre cumplen y contestan rapido.", author:"Cliente frecuente", rating:5},
      {text:"Me pasaron todo ordenado por WhatsApp y quedo andando.", author:"Compra digital", rating:5},
      {text:"Muy buena onda, soporte real y entrega inmediata.", author:"Cliente Argentina", rating:5},
      {text:"Aproveche una promo 4x3 y salio todo impecable.", author:"Oferta semanal", rating:5}
    ];
    let customerReviews = reviewStorage.get();


    function setupScrollReveal(){
      const revealItems = document.querySelectorAll([
        ".trust-title",
        ".feature-card",
        ".feature-text",
        ".section-head",
        ".toolbar",
        ".product",
        ".site-footer"
      ].join(","));

      revealItems.forEach((item, index) => {
        item.classList.add("reveal-on-scroll");
        item.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 70}ms`);
      });

      if (!("IntersectionObserver" in window)) {
        revealItems.forEach(item => item.classList.add("is-visible"));
        return;
      }

      const observer = window.__bassalRevealObserver || new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, {
        threshold:0.14,
        rootMargin:"0px 0px -8% 0px"
      });

      window.__bassalRevealObserver = observer;
      revealItems.forEach(item => {
        if (!item.classList.contains("is-visible")) observer.observe(item);
      });
    }
    function renderFilters(){
      filtersEl.innerHTML = categories.map(category => `<button class="chip ${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`).join("");
    }


    function renderProductPrice(product){
      if (product.platform === "PS PLUS") {
        return `
          <div class="psplus-price-stack">
            <div><span>PlayStation 5</span><b>${money(product.pricePs5 || product.price)}</b></div>
            <div><span>PlayStation 4</span><b>${money(product.pricePs4 || product.price)}</b></div>
          </div>
        `;
      }
      if (product.platform === "STEAM") {
        return `
          <div class="psplus-price-stack account-price-stack steam-code-stack">
            <div><span>Codigo de Steam</span><b>${money(product.price)}</b></div>
          </div>
        `;
      }
      return `
        <div class="psplus-price-stack account-price-stack">
          <div><span>Primaria</span><b>${money(product.price)}</b></div>
          <div><span>Secundaria</span><b>${money(Math.round(product.price * 0.6 / 100) * 100)}</b></div>
        </div>
      `;
    }
    function renderProducts(){
      const query = searchEl.value.trim().toLowerCase();
      const visible = products.filter(product => {
        const matchesCategory = activeCategory === "Todos" || product.platform === activeCategory;
        const matchesQuery = [product.name, product.platform, product.genre].join(" ").toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
      });
      visible.sort((a, b) => Number(b.tag.includes("%")) - Number(a.tag.includes("%")) || Number(b.tag !== "SIN STOCK") - Number(a.tag !== "SIN STOCK"));
      const visibleSlice = visible.slice(0, visibleProductCount);
      productsEl.innerHTML = visibleSlice.map((product, index) => `
        <article class="product ${product.tag === "SIN STOCK" ? "unavailable" : ""}" data-detail="${products.indexOf(product)}">
          <div class="product-media">
            <img loading="lazy" decoding="async" alt="${escapeHtml(product.name)}" src="${product.img}">
            <span class="badge ${product.tag.includes("%") ? "sale" : product.tag === "SIN STOCK" ? "out" : "buy"}">${product.tag}</span>
          </div>
          <div class="product-body">
            <div class="meta"><span>${product.platform}</span><span>${product.genre}</span></div>
            <h3>${escapeHtml(product.name)}</h3>
            <div class="price-row ${product.pricePs5 || product.pricePs4 ? "psplus-row" : ""}">
              ${renderProductPrice(product)}
              <button class="add" data-index="${products.indexOf(product)}" ${product.tag === "SIN STOCK" ? "disabled" : ""}>${product.tag === "SIN STOCK" ? "Sin stock" : "Comprar"}</button>
            </div>
          </div>
        </article>
      `).join("") || `<p class="empty">No encontramos productos con esos filtros.</p>`;
      productsEl.insertAdjacentHTML("beforebegin", `<div class="result-summary" id="resultSummary">${visible.length} productos encontrados</div>`);
      document.querySelectorAll("#catalogo .result-summary").forEach((item, index) => { if (index < document.querySelectorAll("#catalogo .result-summary").length - 1) item.remove(); });
      loadMoreBtn.hidden = visible.length <= visibleProductCount;
      loadMoreBtn.textContent = `Cargar más productos (${Math.max(0, visible.length - visibleProductCount)} restantes)`;
    }


    function openProductWithLoader(product){
      if (!product) return;
      if (!productLoader) {
        openProductDetail(product);
        return;
      }

      productLoader.hidden = false;
      productLoader.classList.remove("closing");
      productLoader.classList.add("active");
      document.body.style.overflow = "hidden";

      window.setTimeout(() => {
        productLoader.classList.add("closing");
        window.setTimeout(() => {
          productLoader.classList.remove("active", "closing");
          productLoader.hidden = true;
          openProductDetail(product);
        }, 180);
      }, 650);
    }
    function openProductDetail(product){
      selectedDetailProduct = product;
      selectedAccountType = "";
      const isSteam = product.platform === "STEAM";
      const isPsPlus = product.platform === "PS PLUS";
      const primary = isPsPlus ? (product.pricePs5 || product.price) : product.price;
      const secondary = isPsPlus ? (product.pricePs4 || product.price) : Math.round(product.price * 0.6 / 100) * 100;

      detailImg.src = product.img;
      detailImg.alt = product.name;
      detailName.textContent = product.name;
      detailPlatform.textContent = product.platform;
      detailGenre.textContent = `${product.genre} · Entrega digital rápida con soporte por WhatsApp.`;
            primaryPrice.textContent = money(primary);
      secondaryPrice.textContent = isSteam ? "" : money(secondary);
      document.querySelector('[data-account="Primaria"] b').textContent = isSteam ? "Codigo de Steam" : (isPsPlus ? "PlayStation 5" : "Cuenta Primaria");
      document.querySelector('[data-account="Primaria"] small').textContent = isSteam ? "Codigo original para activar en tu cuenta." : (isPsPlus ? "Precio para PS5." : "Juga con tu usuario personal.");
      document.querySelector('[data-account="Secundaria"] b').textContent = isPsPlus ? "PlayStation 4" : "Cuenta Secundaria";
      document.querySelector('[data-account="Secundaria"] small').textContent = isPsPlus ? "Precio para PS4." : "Conexion a internet obligatoria, desde la cuenta que otorgamos.";
      document.querySelector('[data-account="Secundaria"]').hidden = isSteam;
      detailTags.innerHTML = `<span>${escapeHtml(product.platform)}</span><span>${escapeHtml(product.genre)}</span>`;
      const detailSubtitle = document.querySelector(".detail-subtitle");
      if (detailSubtitle) {
        detailSubtitle.textContent = isSteam ? "Codigo disponible:" : (isPsPlus ? "Selecciona tu plataforma:" : "Selecciona tu tipo de cuenta:");
      }

      const description = product.description || `${product.name} en formato digital para ${product.platform}. Compra con entrega rápida, soporte personalizado por WhatsApp y respaldo post-compra. Si necesitás información extra sobre instalación, disponibilidad o tipo de cuenta, consultanos antes de comprar.`;
      detailDescription.innerHTML = `<p>${escapeHtml(description)}</p>`;
      detailSpecs.innerHTML = isSteam ? `
        <dl class="spec-list">
          <div><dt>Plataforma</dt><dd>${escapeHtml(product.platform)}</dd></div>
          <div><dt>Tipo de producto</dt><dd>Codigo digital</dd></div>
          <div><dt>Genero</dt><dd>${escapeHtml(product.genre)}</dd></div>
          <div><dt>Entrega</dt><dd>Por WhatsApp</dd></div>
          <div><dt>Codigo de Steam</dt><dd>${money(primary)}</dd></div>
        </dl>
      ` : `
        <dl class="spec-list">
          <div><dt>Plataforma</dt><dd>${escapeHtml(product.platform)}</dd></div>
          <div><dt>Tipo de producto</dt><dd>Digital</dd></div>
          <div><dt>Genero</dt><dd>${escapeHtml(product.genre)}</dd></div>
          <div><dt>Entrega</dt><dd>Por WhatsApp</dd></div>
          ${isPsPlus ? `<div><dt>PlayStation 5</dt><dd>${money(primary)}</dd></div>
          <div><dt>PlayStation 4</dt><dd>${money(secondary)}</dd></div>` : `<div><dt>Cuenta primaria</dt><dd>${money(primary)}</dd></div>
          <div><dt>Cuenta secundaria</dt><dd>${money(secondary)}</dd></div>`}
        </dl>
      `;
      document.querySelectorAll("[data-detail-tab]").forEach((tab, index) => tab.classList.toggle("active", index === 0));
      document.querySelectorAll(".detail-tab-panel").forEach((panel, index) => panel.classList.toggle("active", index === 0));

      accountOptions.forEach(option => { option.classList.remove("active"); option.hidden = false; });
      const primaryOption = document.querySelector('[data-account="Primaria"]');
      document.querySelector('[data-account="Secundaria"]').hidden = isSteam;
      selectedAccountType = isSteam ? "Primaria" : "";
      primaryOption.classList.toggle("active", isSteam);
      detailAdd.classList.toggle("ready", isSteam);
      detailAdd.textContent = isSteam ? "Agregar codigo de Steam" : "Selecciona una cuenta";
      gameDetail.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function closeProductDetail(){
      gameDetail.hidden = true;
      document.body.style.overflow = "";
    }

    function renderCart(){
      cartCount.textContent = cart.length;
      const total = cart.reduce((sum, product) => sum + product.price, 0);
      totalEl.textContent = money(total);
      cartItems.innerHTML = cart.length ? cart.map((product, index) => `
        <div class="cart-line">
          <img loading="lazy" decoding="async" alt="${product.name}" src="${product.img}">
          <div><b>${product.name}</b><span>${money(product.price)}</span></div>
          <button class="remove" data-remove="${index}" aria-label="Quitar ${product.name}">×</button>
        </div>
      `).join("") : `<p class="empty">Tu carrito está vacío.</p>`;
    }

    function renderReviews(){
      const reviews = [...customerReviews, ...defaultReviews];
      reviewWall.innerHTML = reviews.map(review => `
        <article class="review-shot">
          ${review.image ? `<img alt="Imagen de reseña" src="${review.image}">` : ""}
          <p>"${review.text}"</p>
          <b>${review.author} · ${review.rating} estrellas</b>
        </article>
      `).join("");
      const remaining = Math.max(0, 49 - customerReviews.length);
      reviewToggle.textContent = `Ver más reseñas (${remaining} restantes)⌄`;
    }

    filtersEl.addEventListener("click", event => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      activeCategory = button.dataset.category;
      visibleProductCount = 24;
      renderFilters();
      renderProducts();
    });

    productsEl.addEventListener("click", event => {
      const button = event.target.closest("[data-index]");
      if (button) {
        if (button.disabled) return;
        event.stopPropagation();
        const product = products[Number(button.dataset.index)];
        if (product.platform === "PS PLUS") {
          openProductWithLoader(product);
          return;
        }
        cart.push(product);
        renderCart();
        drawer.classList.add("open");
        return;
      }

      const card = event.target.closest("[data-detail]");
      if (!card) return;
      openProductWithLoader(products[Number(card.dataset.detail)]);
    });

    accountOptions.forEach(option => {
      option.addEventListener("click", () => {
        selectedAccountType = option.dataset.account;
        accountOptions.forEach(item => item.classList.remove("active"));
        option.classList.add("active");
        detailAdd.classList.add("ready");
        const selectedLabel = selectedDetailProduct?.platform === "PS PLUS"
          ? (selectedAccountType === "Primaria" ? "PS5" : "PS4")
          : `cuenta ${selectedAccountType}`;
        detailAdd.textContent = selectedDetailProduct?.platform === "STEAM" ? "Agregar codigo de Steam" : `Agregar ${selectedLabel}`;
      });
    });

    detailAdd.addEventListener("click", () => {
      if (!selectedDetailProduct || !selectedAccountType) return;
      const isSelectedPsPlus = selectedDetailProduct.platform === "PS PLUS";
      const price = selectedAccountType === "Primaria"
        ? (isSelectedPsPlus ? (selectedDetailProduct.pricePs5 || selectedDetailProduct.price) : selectedDetailProduct.price)
        : (isSelectedPsPlus ? (selectedDetailProduct.pricePs4 || selectedDetailProduct.price) : Math.round(selectedDetailProduct.price * 0.6 / 100) * 100);

      const accountLabel = selectedDetailProduct.platform === "STEAM"
        ? "Codigo de Steam"
        : (selectedDetailProduct.platform === "PS PLUS" ? (selectedAccountType === "Primaria" ? "PS5" : "PS4") : `Cuenta ${selectedAccountType}`);
      cart.push({
        ...selectedDetailProduct,
        name: `${selectedDetailProduct.name} - ${accountLabel}`,
        price
      });
      renderCart();
      closeProductDetail();
      drawer.classList.add("open");
    });


    document.querySelectorAll("[data-detail-tab]").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll("[data-detail-tab]").forEach(item => item.classList.remove("active"));
        document.querySelectorAll(".detail-tab-panel").forEach(panel => panel.classList.remove("active"));
        tab.classList.add("active");
        document.querySelector(tab.dataset.detailTab === "description" ? "#detailDescription" : "#detailSpecs").classList.add("active");
      });
    });

    // DETAIL_TABS_LISTENER
    document.querySelectorAll("[data-detail-tab]").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll("[data-detail-tab]").forEach(item => item.classList.remove("active"));
        document.querySelectorAll(".detail-tab-panel").forEach(panel => panel.classList.remove("active"));
        tab.classList.add("active");
        document.querySelector(tab.dataset.detailTab === "description" ? "#detailDescription" : "#detailSpecs").classList.add("active");
      });
    });
    detailBack.addEventListener("click", closeProductDetail);

    gameDetail.addEventListener("click", event => {
      if (event.target === gameDetail) closeProductDetail();
    });

    cartItems.addEventListener("click", event => {
      const button = event.target.closest("[data-remove]");
      if (!button) return;
      cart.splice(Number(button.dataset.remove), 1);
      renderCart();
    });

    searchEl.addEventListener("input", () => {
      visibleProductCount = 24;
      renderProducts();
    });
    loadMoreBtn.addEventListener("click", () => {
      visibleProductCount += 24;
      renderProducts();
    });

    document.querySelectorAll("[data-nav-category], [data-nav-offers]").forEach(link => {
      link.addEventListener("click", () => {
        if (link.dataset.navOffers) {
          activeCategory = "Todos";
          searchEl.value = "%";
        } else {
          activeCategory = link.dataset.navCategory || "Todos";
          searchEl.value = "";
        }
        visibleProductCount = 24;
        renderFilters();
        renderProducts();
      });
    });
    document.querySelector("#cartBtn").addEventListener("click", () => drawer.classList.add("open"));
    document.querySelector("#closeCart").addEventListener("click", () => drawer.classList.remove("open"));
        const navEl = document.querySelector("#nav");
    const closeMobileNav = () => navEl?.classList.remove("open");
    document.querySelector("#menuBtn").addEventListener("click", () => navEl.classList.toggle("open"));
    document.querySelectorAll(".links a, .ghost, .brand").forEach(link => {
      link.addEventListener("click", closeMobileNav);
    });
    document.querySelector("#checkout").addEventListener("click", () => {
      if (!cart.length) return;
      const lines = cart.map((product, index) => `${index + 1}. ${product.name} - ${money(product.price)}`).join("\n");
      const total = money(cart.reduce((sum, product) => sum + product.price, 0));
      const message = `Hola Bassal Store! Quiero hacer este pedido:\n\n${lines}\n\nTotal: ${total}\n\nMe decis disponibilidad y formas de pago?`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
    });

    if (document.querySelector("#reviewForm")) {
      document.querySelectorAll("[data-rating]").forEach(button => {
        button.addEventListener("click", () => {
          selectedRating = Number(button.dataset.rating);
          ratingScore.textContent = `${selectedRating}/5`;
          document.querySelectorAll("[data-rating]").forEach(star => {
            star.style.opacity = Number(star.dataset.rating) <= selectedRating ? "1" : ".32";
          });
        });
      });

      reviewComment.addEventListener("input", () => {
        charCount.textContent = `${reviewComment.value.length}/1200`;
      });

      reviewImage.addEventListener("change", event => {
        const file = event.target.files[0];
        fileName.textContent = file ? file.name : "";
        selectedImageData = "";
        if (!file) return;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          selectedImageData = reader.result;
        });
        reader.readAsDataURL(file);
      });

      document.querySelector("#reviewForm").addEventListener("submit", event => {
        event.preventDefault();
        const text = reviewComment.value.trim();
        if (!text) {
          reviewStatus.textContent = "Escribí un comentario para publicar la reseña.";
          return;
        }
        customerReviews.unshift({
          text,
          rating:selectedRating,
          image:selectedImageData,
          author:"Tu reseña"
        });
        reviewStorage.set(customerReviews);
        if (reviewWall) renderReviews();
    setupScrollReveal();
        reviewComment.value = "";
        charCount.textContent = "0/1200";
        reviewImage.value = "";
        fileName.textContent = "";
        selectedImageData = "";
        reviewStatus.textContent = "Reseña publicada correctamente.";
      });
    }
    renderFilters();
    renderProducts();
    renderCart();
    if (reviewWall) renderReviews();
    setupScrollReveal();
