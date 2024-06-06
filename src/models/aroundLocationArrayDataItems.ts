/**
 * Shell EVLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AroundLocationArrayDataItemsLoc,
  aroundLocationArrayDataItemsLocSchema,
} from './aroundLocationArrayDataItemsLoc';
import {
  AroundLocationArrayDataItemsOpeningHoursItems,
  aroundLocationArrayDataItemsOpeningHoursItemsSchema,
} from './aroundLocationArrayDataItemsOpeningHoursItems';

export interface AroundLocationArrayDataItems {
  /** The station’s unique site identifier – this must be ignored */
  id: string;
  /**
   * All fuel stations are of at least one Type, indicating whether it is Shell-branded or not, and if the
   * station can be used by trucks. Note that a station can have more than one Type (e.g. Shell retail
   * sites (Type=0) can also be truck friendly (Type=2)).
   * Type values are as follows:
   * *  0 = Shell owned/branded stations that are not also Type=2 or Type=3
   * *  1 = Partner stations accepting Shell Card
   * *  2 = Shell owned/branded stations that are truck friendly but not Type=3
   * *  3 = Shell owned/branded stations that are truck only
   */
  type: number;
  /** The name of the site */
  name: string;
  /** The side address as a concatenation of address information */
  addr: string;
  /** The site’s latitude */
  lat: number;
  /** The site’s longitude */
  lon: number;
  /** An array of amenities available at the station (see above for complete list) */
  amen: number[];
  /**
   * An array of fuels* available at the station.
   *  Global Product Group names:
   *  *  8 = CNG
   *  *  10 = Premium Gasoline
   *  *  11 = Premium Diesel
   *  *  12 = Fuelsave Midgrade Gasoline
   *  *  13 = Fuelsave Regular Diesel
   *  *  14 = Midgrade Gasoline
   *  *  15 = Low Octane gasoline
   *  *  16 = Regular Diesel
   *  *  17 = Autogas LPG
   *  *  18 = Auto/RV Propane
   *  *  20 = Hydrogen
   *  *  21 = Kerosene
   *  *  22 = Super Premium Gasoline
   *  *  23 = Unleaded Super
   *  *  24 = Truck Diesel
   *  *  25 = Super98
   *  *  26 = GTL
   *  *  27 = Fuelsave 98
   *  *  28 = LNG
   *  *  29 = DieselFit
   *  *  30 = Shell Recharge
   * 
   *  *An external mapping table may need to be maintained if it is required to display true fuel product names (as visible on the site)
   */
  fuel: number[];
  /** Object containing address details/elements */
  loc: AroundLocationArrayDataItemsLoc;
  /** This is the 5-digit Shell Station ID. Leading ‘0’ should be dropped and only last four digits, should be used. E.G. for ‘00123’, only ‘0123’ should be used and for ‘04567’ only ‘4567’ should be used. */
  mppStationId: string;
  /**
   * The Mobile Payment Platform recognises a user being located at a Shell Station if their GPS is within 300m of a Shell station. Some locations will return multiple Shell Stations within a 300 meter radius. This is an issue for Mobile Payments as it needs  to accurately identify the station the Customer is located at to ensure the correct pump is released
   * In Germany such locations have been identified and each Station has been assigned a unique letter (e.g. A, B, C). These letters are clearly visible at the stations. If a Mobile Payments user is located at such a location, they will need to identify the Station by identifying and specifying the Station’s corresponding letter as part of the refuelling journey.
   * The double_site_id is used to store the Stations unique letter/ID value. It’s only populated if/when 1 or more stations are within 300m from this station.
   */
  doubleSiteId?: string;
  /** An Array of the station’s opening hours. This may have opening and closing times in hours, minutes and the day of the week. */
  openingHours?: AroundLocationArrayDataItemsOpeningHoursItems[];
  /** Station’s contact telephone number */
  telephone?: string;
  /** Station’s authorisation code */
  authorisationCode?: string;
  /** Station’s mobile payment preauthorisation value */
  mpPreauth?: number;
}

export const aroundLocationArrayDataItemsSchema: Schema<AroundLocationArrayDataItems> = object(
  {
    id: ['id', string()],
    type: ['type', number()],
    name: ['name', string()],
    addr: ['addr', string()],
    lat: ['lat', number()],
    lon: ['lon', number()],
    amen: ['amen', array(number())],
    fuel: ['fuel', array(number())],
    loc: ['loc', lazy(() => aroundLocationArrayDataItemsLocSchema)],
    mppStationId: ['mpp_station_id', string()],
    doubleSiteId: ['double_site_id', optional(string())],
    openingHours: [
      'opening_hours',
      optional(
        array(lazy(() => aroundLocationArrayDataItemsOpeningHoursItemsSchema))
      ),
    ],
    telephone: ['telephone', optional(string())],
    authorisationCode: ['authorisation_code', optional(string())],
    mpPreauth: ['mp_preauth', optional(number())],
  }
);
