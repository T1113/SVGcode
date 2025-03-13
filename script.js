document.addEventListener('DOMContentLoaded', function() {
    // 折叠面板功能
    function toggleCollapse(id) {
        const content = document.getElementById(id);
        if (content) {
            content.classList.toggle('collapse-open');
        }
    }

    // 为所有section-header添加点击事件
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', function() {
            // 获取对应的id
            const id = this.getAttribute('onclick').match(/toggleCollapse\('(.*?)'\)/)[1];
            toggleCollapse(id);
        });
    });

    // 初始化商业模式创新图表
    const ctx = document.getElementById('businessModelChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['产品创新', '技术创新', '流程创新', '商业模式创新'],
                datasets: [{
                    label: '相对价值增长',
                    data: [30, 40, 50, 100],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(255, 99, 132, 0.5)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});