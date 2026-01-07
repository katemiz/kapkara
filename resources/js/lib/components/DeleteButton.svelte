<script>
    import Swal from 'sweetalert2';
    import { router } from '@inertiajs/svelte';

    let { url } = $props(); // The URL to send the DELETE request to (e.g., /questions/1)

    import { Trash } from "@lucide/svelte";

    /**
     * Handles the click event, showing the SweetAlert confirmation.
     */
    const confirmAndDelete = () => {
        Swal.fire({
            title: 'Are you sure to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33', // Red color for delete
            cancelButtonColor: '#3085d6', // Blue color for cancel
            confirmButtonText: 'Delete!',
            cancelButtonText: 'No',

            // Custom button classes for better styling consistency
            customClass: {
                confirmButton: 'button mx-4 is-danger is-light',
                cancelButton: 'button mx-4'
            },
            buttonsStyling: false // Important to use custom classes
        }).then((result) => {
            if (result.isConfirmed) {
                // If the user confirms, perform the Inertia delete request
                deleteItem();
            }
        });
    };

    /**
     * Executes the actual Inertia DELETE request.
     */
    const deleteItem = () => {
        // You can add a loading state here if needed
        router.delete(url, {
            preserveScroll: true,
            // Optionally, handle the success/error response
            onSuccess: () => {
                Swal.fire(
                    'Deleted!',
                    'The item has been successfully deleted.',
                    'success'
                );
            },
            onError: (errors) => {
                // Handle deletion errors
                let errorText = 'An error occurred during deletion.';
                // Basic error display for demo
                if (errors && Object.keys(errors).length > 0) {
                    errorText = Object.values(errors).join('<br>');
                }
                Swal.fire(
                    'Error!',
                    errorText,
                    'error'
                );
            }
        });
    };
</script>

<button
    type="button"
    onclick={confirmAndDelete}
    class="button is-danger has-text-white"
>
    <span class="icon">
        <Trash size="16" />
    </span>
</button>