import React, { useState } from "react";
import * as S from './Tabs.styled';

const Tabs = ({ defaultActiveKey, children }) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    const tabs = React.Children.toArray(children);
    
    const handleSelect = (key) => {
        setActiveKey(key);
    };

    const activeTab = tabs.find((tab) => tab.props.eventKey === activeKey);

    return (
        <S.TabsWrapper>
            <S.TabsList>
                {tabs.map((tab) => (
                    <S.TabButton
                        key={tab.props.eventKey}
                        type="button"
                        active={tab.props.eventKey === activeKey}
                        onClick={() => {
                            if (tab.props.disabled) return;
                            handleSelect(tab.props.eventKey)
                        }}
                        disabled={tab.props.disabled}
                    >
                        {tab.props.title}
                    </S.TabButton>
                ))}
            </S.TabsList>

            {activeTab && (
                <S.TabPanel>
                    {activeTab.props.children}
                </S.TabPanel>
            )}
        </S.TabsWrapper>
    );
};

export default Tabs;