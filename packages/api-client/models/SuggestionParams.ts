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

export class SuggestionParams {
    'trainingId'?: string;
    'conversationId'?: string;
    'question'?: string;
    'n'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "trainingId",
            "baseName": "trainingId",
            "type": "string",
            "format": ""
        },
        {
            "name": "conversationId",
            "baseName": "conversationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "question",
            "baseName": "question",
            "type": "string",
            "format": ""
        },
        {
            "name": "n",
            "baseName": "n",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SuggestionParams.attributeTypeMap;
    }

    public constructor() {
    }
}

