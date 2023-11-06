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
* Operator Info
*/
export class Operator {
    /**
    * member id
    */
    'memberId'?: number;
    /**
    * avatar url
    */
    'avatar'?: string;
    /**
    * member name
    */
    'memberName'?: string;
    /**
    * is active
    */
    'isActive'?: boolean;
    /**
    * is deleted
    */
    'isDeleted'?: boolean;
    /**
    * whether the nickname has been modified
    */
    'isNickNameModified'?: boolean;
    /**
    * whether the member name has been modified
    */
    'isMemberNameModified'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "memberId",
            "baseName": "memberId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "memberName",
            "baseName": "memberName",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isNickNameModified",
            "baseName": "isNickNameModified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMemberNameModified",
            "baseName": "isMemberNameModified",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Operator.attributeTypeMap;
    }

    public constructor() {
    }
}

