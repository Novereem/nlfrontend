import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {CommandBar} from "@fluentui/react/lib/CommandBar";
import {Separator} from "@fluentui/react/lib/Separator";
import {IButtonProps} from "@fluentui/react/lib/Button";
import {initializeIcons} from "@fluentui/react/lib/Icons";
import {getAPI} from "../../Redux/selectors";
import {connect} from "react-redux";

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };
initializeIcons(/* optional base url */);

function Header(props) {
    const[accountInfo, setAccountInfo] = useState({})
    useEffect(() => {
        if (props.api !== undefined && localStorage.getItem('token') !== null)
        {
            let token = localStorage.getItem('token')
            props.api.get("account/info/" + token).then(res => {
                console.log(res.data)
                setAccountInfo(res.data)
            })
        }
    }, [props.api])
    let history = useHistory();
    let themeIconSunny = true;
    function theme(){
        if(localStorage.getItem('darkMode') === 'true')
        {
            localStorage.setItem('darkMode', "false")
            themeIconSunny = false;
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

    function logOut() {
        localStorage.removeItem('token')
        window.location.reload();
    }

    //Checked if logged in
    let loginText = "Login";
    if (true) {
        loginText = "Login";
    }

    if (localStorage.getItem('token') === null){
        console.log("account is undefined")
        const _items = [
            {
                key: 'login',
                text: 'Login',
                iconProps: { iconName: 'Contact' },
                onClick: () => handleClick("login"),
            },
        ];

        const _farItems = [
            {
                key: 'theme',
                text: 'Theme',
                // This needs an ariaLabel since it's icon-only
                ariaLabel: 'Info',
                iconOnly: true,
                iconProps: (localStorage.getItem('darkMode') ? { iconName: 'ClearNight' } : { iconName: 'Sunny' }),
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
    else
    {
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
                            text: accountInfo.username,
                            iconProps: { iconName: 'AccountBrowser'},
                            'data-automation-id': 'mijnAccountButton', // optional
                            onClick: () => handleClick("account")
                        },
                        {
                            key: 'savedLaptops',
                            text: 'Mijn Laptops',
                            iconProps: { iconName: 'LaptopSelected' },
                        },
                        {
                            key: 'log out',
                            text: loginText,
                            iconProps: { iconName: 'LogOut' },
                            onClick: () => logOut()
                        },
                    ],
                },
            },
        ];

        const _farItems = [
            {
                key: 'info',
                text: 'Info',
                // This needs an ariaLabel since it's icon-only
                ariaLabel: 'Info',
                iconOnly: true,
                iconProps: (localStorage.getItem('darkMode') ? { iconName: 'ClearNight' } : { iconName: 'Sunny' }),
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




}

const mapStateToProps = (state) => {
    return {
        api : getAPI(state)
    };
}

export default connect(mapStateToProps)(Header);