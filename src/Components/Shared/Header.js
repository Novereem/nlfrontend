import React from "react";
import {useHistory} from "react-router-dom";
import {CommandBar} from "@fluentui/react/lib/CommandBar";
import {Separator} from "@fluentui/react/lib/Separator";
import {IButtonProps} from "@fluentui/react/lib/Button";
import {initializeIcons} from "@fluentui/react/lib/Icons";

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };
initializeIcons(/* optional base url */);

function Header() {
    let history = useHistory();
    function theme(){
        if(localStorage.getItem('darkMode') === 'true')
        {
            localStorage.setItem('darkMode', "false")
        }
        else
        {
            localStorage.setItem('darkMode', "true")
        }
        window.location.reload();
    }


    function handleClick(target) {
        history.push("/" + target)
    }

    //Checked if logged in
    let loginText = "Login";
    if (true) {
        loginText = "Login";
    }

    const _items = [
        {
            key: 'accountItem',
            text: 'Account',
            cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
            iconProps: { iconName: 'Add' },
            buttonStyles: '',
            subMenuProps: {
                items: [
                    {
                        key: 'account',
                        text: 'Mijn Account',
                        iconProps: { iconName: 'AccountBrowser'},
                        'data-automation-id': 'mijnAccountButton', // optional
                        onClick: () => handleClick("account")
                    },
                    {
                        key: 'login',
                        text: loginText,
                        iconProps: { iconName: 'Leave' },
                        onClick: () => handleClick("login")
                    },
                    {
                        key: 'savedLaptops',
                        text: 'Mijn Laptops',
                        iconProps: { iconName: 'LaptopSelected' },
                    },
                ],
            },
        },
        {
            key: 'upload',
            text: 'Upload',
            iconProps: { iconName: 'Upload' },
            href: 'https://developer.microsoft.com/en-us/fluentui',
        },
        {
            key: 'share',
            text: 'Share',
            iconProps: { iconName: 'Share' },
            onClick: () => console.log('Share'),
        },
        {
            key: 'download',
            text: 'Download',
            iconProps: { iconName: 'Download' },
            onClick: () => console.log('Download'),
        },
    ];

    const _farItems = [
        {
            key: 'info',
            text: 'Info',
            // This needs an ariaLabel since it's icon-only
            ariaLabel: 'Info',
            iconOnly: true,
            iconProps: { iconName: 'Info' },
            onClick: theme,
        },
    ];

    return (
        <div>
            <CommandBar
                items={_items}
                overflowButtonProps={overflowProps}
                farItems={_farItems}
                ariaLabel="Inbox actions"
                primaryGroupAriaLabel="Email actions"
                farItemsGroupAriaLabel="More actions"
            />

            <Separator class={"separator"}/>
        </div>
    );
}

export default Header;