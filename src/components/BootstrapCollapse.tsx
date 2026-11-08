import { useState, type ReactNode } from 'react';
import { Button, Collapse } from 'react-bootstrap';

/**
 * Свойства для компонента BootstrapCollapse.
 * @property collapsedLabel - Текст кнопки в закрытом состоянии.
 * @property expandedLabel - Текст кнопки в открытом состоянии.
 * @property children - Любой вложенный контент для плавного раскрытия.
 */
interface BootstrapCollapseProps {
    collapsedLabel?: string;
    expandedLabel?: string;
    children: ReactNode;
}

export default function BootstrapCollapse({
    collapsedLabel = 'Развернуть',
    expandedLabel = 'Свернуть',
    children
}: BootstrapCollapseProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bootstrap-collapse-container mx-auto my-3" style={{ maxWidth: '500px', width: '100%' }}>

            {/* Кнопка управления переключением */}
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="bootstrap-collapse-content"
                aria-expanded={open}
                variant="primary"
                className="mb-2 w-100"
                type="button"
            >
                {open ? expandedLabel : collapsedLabel}
            </Button>

            {/* Анимированный контейнер Bootstrap */}
            <Collapse in={open}>
                <div id="bootstrap-collapse-content">
                    {/* Combinamos las clases nativas .card и .card-body para el recuadro */}
                    <div className="card card-body">
                        {children}
                    </div>
                </div>
            </Collapse>
        </div>
    );
}
