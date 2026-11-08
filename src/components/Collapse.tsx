import { useState, type ReactNode } from 'react';

/**
 * Интерфейс для свойств компонента Collapse.
 * @property collapsedLabel - Текст кнопки, когда контент скрыт (по умолчанию "Развернуть").
 * @property expandedLabel - Текст кнопки, когда контент открыт (по умолчанию "Свернуть").
 * @property children - Скрываемое содержимое любого типа (ReactNode).
 */
interface CollapseProps {
    collapsedLabel?: string;
    expandedLabel?: string;
    children: ReactNode;
}

export default function Collapse({
    collapsedLabel = 'Развернуть',
    expandedLabel = 'Свернуть',
    children
}: CollapseProps) {
    // Контролируем состояние: true = открыто, false = закрыто
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="collapse-wrapper">
            {/* Кнопка управления переключением состояния */}
            <button className="collapse-btn" onClick={toggleCollapse}>
                {isOpen ? expandedLabel : collapsedLabel}
            </button>

            {/* Контейнер содержимого с динамическим CSS-классом */}
            <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
                <div className="collapse-inner">
                    {children}
                </div>
            </div>
        </div>
    );
}
