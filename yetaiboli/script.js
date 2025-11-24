// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const blurRange = document.getElementById('blur-range');
    const blurValue = document.getElementById('blur-value');
    const opacityRange = document.getElementById('opacity-range');
    const opacityValue = document.getElementById('opacity-value');
    const colorPicker = document.getElementById('color-picker');
    
    // 获取所有具有玻璃效果的元素
    const glassElements = document.querySelectorAll('.glass-card, .glass-control-panel, .glass-notification-center, .glass-control-center, .glass-button');
    
    // 初始化玻璃效果
    updateGlassEffect();
    
    // 模糊程度滑块事件
    blurRange.addEventListener('input', function() {
        blurValue.textContent = this.value + 'px';
        updateGlassEffect();
    });
    
    // 透明度滑块事件
    opacityRange.addEventListener('input', function() {
        opacityValue.textContent = this.value + '%';
        updateGlassEffect();
    });
    
    // 颜色选择器事件
    colorPicker.addEventListener('input', function() {
        updateGlassEffect();
    });
    
    // 更新玻璃效果的函数
    function updateGlassEffect() {
        const blurValue = blurRange.value;
        const opacityValue = opacityRange.value / 100; // 转换为0-1的小数
        const colorValue = hexToRgb(colorPicker.value);
        
        glassElements.forEach(element => {
            // 更新模糊效果
            element.style.backdropFilter = `blur(${blurValue}px)`;
            element.style.webkitBackdropFilter = `blur(${blurValue}px)`;
            
            // 更新透明度和颜色
            const currentBg = window.getComputedStyle(element).backgroundColor;
            if (element.classList.contains('glass-button')) {
                // 按钮使用稍微不同的透明度
                element.style.backgroundColor = `rgba(${colorValue.r}, ${colorValue.g}, ${colorValue.b}, ${opacityValue * 0.8})`;
            } else {
                element.style.backgroundColor = `rgba(${colorValue.r}, ${colorValue.g}, ${colorValue.b}, ${opacityValue})`;
            }
        });
    }
    
    // 将十六进制颜色转换为RGB
    function hexToRgb(hex) {
        // 移除#号
        hex = hex.replace('#', '');
        
        // 解析R, G, B值
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return { r, g, b };
    }
    
    // 添加鼠标跟随光效
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        glassElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;
            
            // 计算鼠标与元素中心的距离
            const distance = Math.sqrt(
                Math.pow(mouseX - elementX, 2) + 
                Math.pow(mouseY - elementY, 2)
            );
            
            // 根据距离调整光效强度
            const maxDistance = 300;
            const intensity = Math.max(0, 1 - distance / maxDistance);
            
            // 添加光效
            if (intensity > 0) {
                const angle = Math.atan2(mouseY - elementY, mouseX - elementX);
                const offsetX = Math.cos(angle) * intensity * 10;
                const offsetY = Math.sin(angle) * intensity * 10;
                
                element.style.transform = `translateY(-5px) translateX(${offsetX}px) translateY(${offsetY}px)`;
                element.style.boxShadow = `
                    0 ${15 + intensity * 10}px ${35 + intensity * 15}px rgba(0, 0, 0, ${0.15 + intensity * 0.1}),
                    inset 0 1px 0 rgba(255, 255, 255, ${0.3 + intensity * 0.2}),
                    0 0 ${20 + intensity * 20}px rgba(255, 255, 255, ${intensity * 0.1})
                `;
            } else {
                // 重置样式
                element.style.transform = '';
                element.style.boxShadow = `
                    0 8px 32px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `;
            }
        });
    });
    
    // 控制项点击效果
    const controlItems = document.querySelectorAll('.control-item');
    controlItems.forEach(item => {
        item.addEventListener('click', function() {
            // 添加点击动画
            this.style.transform = 'scale(0.95)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            
            // 获取控制项名称
            const controlName = this.querySelector('span').textContent;
            
            // 创建临时提示
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = `已点击 ${controlName}`;
            toast.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px 20px;
                border-radius: 20px;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(toast);
            
            // 显示提示
            setTimeout(() => {
                toast.style.opacity = '1';
            }, 10);
            
            // 隐藏并移除提示
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 2000);
            
            // 重置控制项样式
            setTimeout(() => {
                this.style.transform = '';
                this.style.backgroundColor = '';
            }, 200);
        });
    });
    
    // 按钮点击效果
    const buttons = document.querySelectorAll('.glass-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 创建涟漪效果
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            // 获取点击位置
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            // 设置涟漪样式
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            `;
            
            // 添加涟漪动画样式
            if (!document.querySelector('#ripple-style')) {
                const style = document.createElement('style');
                style.id = 'ripple-style';
                style.textContent = `
                    @keyframes ripple-animation {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // 添加涟漪到按钮
            this.appendChild(ripple);
            
            // 移除涟漪
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // 显示按钮点击提示
            const buttonText = this.textContent;
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = `已点击: ${buttonText}`;
            toast.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px 20px;
                border-radius: 20px;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(toast);
            
            // 显示提示
            setTimeout(() => {
                toast.style.opacity = '1';
            }, 10);
            
            // 隐藏并移除提示
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 2000);
        });
    });
    
    // 添加页面加载动画
    const allElements = document.querySelectorAll('.glass-card, .glass-control-panel, .glass-notification-center, .glass-control-center');
    
    // 初始状态设置为透明
    allElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        // 延迟显示每个元素
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // 添加窗口大小变化时的响应
    window.addEventListener('resize', function() {
        // 重新计算玻璃效果
        updateGlassEffect();
    });
    
    // 添加滚动视差效果
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.background-layer');
        
        if (parallax) {
            // 视差滚动效果
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});