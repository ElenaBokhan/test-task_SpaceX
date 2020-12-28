export type launchType = {
    crew: null
    details: null | string
    flight_number: number
    is_tentative: boolean
    launch_date_local: string
    launch_date_unix: number
    launch_date_utc: string
    launch_site: {site_id:string, site_name: string, site_name_long: string}
    launch_success: boolean
    launch_window: number
    launch_year: string
    links: {mission_patch: string, mission_patch_small: string, reddit_campaign: null, reddit_launch: null, reddit_recovery: null}
    mission_id: Array<string>
    mission_name: string
    rocket: {rocket_id: string, rocket_name: string, rocket_type: string}
    ships: Array<string>
    static_fire_date_unix: number
    static_fire_date_utc: string
    tbd: false
    telemetry: {flight_club: null}
    tentative_max_precision: string
    timeline: {webcast_liftoff: number, go_for_prop_loading: number, rp1_loading:number, stage1_lox_loading: number, stage2_lox_loading: number}
    upcoming: boolean
}

export type LaunchPadType = {
attempted_launches: number
details: string
id: number
location: {name: string, region: string, latitude: number, longitude: number}
name: string
site_id: string
site_name_long: string
status:string
successful_launches: 0
vehicles_launched: Array<string>
wikipedia: string
}
export type RocketType = {
    active: boolean
    boosters: number
    company: string
    cost_per_launch: number
    country: string
    description: string
    diameter: {meters: number, feet:number}
    engines: {number: number, type: string, version: string, layout: string}
    first_flight: string
    first_stage: {reusable: false, engines: number, fuel_amount_tons: number, burn_time_sec: number}
    flickr_images: Array<string>
    height: {meters: number, feet: number}
    id: number
    landing_legs: {number: number, material: null}
    mass: {kg: number, lb: number}
    payload_weights: Array<{id: string, name: string, kg: number, lb: number}>
    rocket_id: string
    rocket_name: string
    rocket_type: string
    second_stage: {reusable: false, engines: number, fuel_amount_tons: number, burn_time_sec: number}
    stages: number
    success_rate_pct: number
    wikipedia: string
}