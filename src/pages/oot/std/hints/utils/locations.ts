const locations: OOT.Location[] = [
  {
    name: 'Kokiri Forest',
    checks: [
      {
        name: 'Kokiri Sword Chest',
        id: 'kf_sw_chst',
      },
      {
        name: 'Mido House TL Chest',
        id: 'kf_hse_tl',
      },
      {
        name: 'Mido House TR Chest',
        id: 'kf_hse_tr',
      },
      {
        name: 'Mido House BL Chest',
        id: 'kf_hse_bl',
      },
      {
        name: 'Mido House BR Chest',
        id: 'kf_hse_br',
      },
    ],
  },
  {
    name: 'Deku Tree',
    checks: [
      {
        name: 'Deku Tree Slingshot Chest',
        id: 'dt_slingshot',
      },
      {
        name: 'Deku Tree Map Chest',
        id: 'dt_map',
      },
      {
        name: 'Deku Tree Slingshot Room Upper Chest',
        id: 'dt_sligshot_upper',
      },
      {
        name: 'Deku Tree Compass Chest',
        id: 'dt_compass',
        requirements: {
          access: [{ itemId: ['hookshot'] }],
        },
      },
    ],
  },
];

export default locations;
