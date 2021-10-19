<!doctype html>
<html lang="en">
<head>
<?php echo $__env->make('admin.layouts.partials._meta', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body dir="rtl">
<?php echo $__env->make('admin.layouts.base._sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<div class="page">
    <?php echo $__env->make('admin.layouts.base.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php echo $__env->yieldContent('content'); ?>

</div>
<?php echo $__env->make('admin.layouts.partials._scripts', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

</body>
</html><?php /**PATH C:\Users\Manaf\Desktop\project\cardProject\resources\views/admin/dashboard.blade.php ENDPATH**/ ?>