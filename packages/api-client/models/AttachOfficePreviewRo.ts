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
* Attachment preview request parameter ro
*/
export class AttachOfficePreviewRo {
    /**
    * Cloud file name/key
    */
    'token': string;
    /**
    * Source file name and suffix of cloud files
    */
    'attname': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "attname",
            "baseName": "attname",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AttachOfficePreviewRo.attributeTypeMap;
    }

    public constructor() {
    }
}
