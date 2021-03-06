import * as React from 'react';
import { FormHeader } from '../../../form/form';
import { TokenItem } from '../item';

export interface ITokenItemProps {
    address: string;
    balance: string;
    symbol: string;
    decimalPointOffset: number;
}

export function TokenDeleteConfirmation(props: ITokenItemProps) {
    return (
        <div>
            <FormHeader>Are you sure want to delete token?</FormHeader>
            <div className="sonm-token-delete-confirmation__info">
                <TokenItem {...props} />
            </div>
        </div>
    );
}

export default TokenDeleteConfirmation;
