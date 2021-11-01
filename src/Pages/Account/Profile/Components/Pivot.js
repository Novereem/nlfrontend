import * as React from 'react';
import { Label, Pivot, PivotItem } from '@fluentui/react';

function ProfilePivot() {
    return (
    <div>
        <Pivot linkSize="large">
            <PivotItem headerText="Account Gegevens">
                <Label>Bababoey</Label>
            </PivotItem>
            <PivotItem headerText="Opgeslagen Laptops">
                <Label>Bababoey</Label>
            </PivotItem>
            <PivotItem headerText="Saved Laptops">
                <Label>Bababoey</Label>
            </PivotItem>
        </Pivot>
    </div>
    )
}

export default ProfilePivot;