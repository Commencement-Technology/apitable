/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Field permission set
*/
export class FieldPermission {
    /**
    * Viewable
    */
    'readable'?: boolean;
    /**
    * Editable
    */
    'editable'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "readable",
            "baseName": "readable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "editable",
            "baseName": "editable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FieldPermission.attributeTypeMap;
    }

    public constructor() {
    }
}
