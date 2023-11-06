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

export class Feedback {
    'id'?: number;
    'aiId'?: string;
    'trainingId'?: string;
    'conversationId'?: string;
    'messageIndex'?: number;
    'isLike'?: number;
    'comment'?: string;
    'state'?: number;
    'created'?: number;
    'creator'?: string;
    'avatar'?: string;
    'color'?: number;
    'memberId'?: number;
    'aiModel'?: string;
    'botType'?: string;
    'conversationTime'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "aiId",
            "baseName": "aiId",
            "type": "string",
            "format": ""
        },
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
            "name": "messageIndex",
            "baseName": "messageIndex",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isLike",
            "baseName": "isLike",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "string",
            "format": ""
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "memberId",
            "baseName": "memberId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "aiModel",
            "baseName": "aiModel",
            "type": "string",
            "format": ""
        },
        {
            "name": "botType",
            "baseName": "botType",
            "type": "string",
            "format": ""
        },
        {
            "name": "conversationTime",
            "baseName": "conversationTime",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Feedback.attributeTypeMap;
    }

    public constructor() {
    }
}

