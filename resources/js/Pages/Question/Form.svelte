<script>
    import { useForm } from "@inertiajs/svelte";

    import Layout from "../../Shared/Layout.svelte";
    import Editor from "$lib/components/Editor.svelte";
    import FormInput from "$lib/components/FormInput.svelte";
    import FormSelect from "$lib/components/FormSelect.svelte";
    import FormRadio from "$lib/components/FormRadio.svelte";
    import FormCheckBoxSingle from "$lib/components/FormCheckBoxSingle.svelte";
    import FormCheckBoxGroup from "$lib/components/FormCheckBoxGroup.svelte";
    import FormDate from "$lib/components/FormDate.svelte";
    import FormDateTime from "$lib/components/FormDateTime.svelte";
    import FormUpload from "$lib/components/FormUpload.svelte";


    let edContent = $state("<em>Your content will appear here...</em>");

    let { 
        question = null,
        isEdit = false,
    } = $props();


    // 1. Initialize the Inertia Form   
    let form = $derived(useForm({
        text: question?.text ?? '',
        myInput: question?.myValue ?? '',


        level1: '',
        level2: '',
        level3: ''




    }));






















    const DATA = {
        // Level 1 options
        level1: [
            { value: 'electronics', label: 'Electronics' },
            { value: 'clothing', label: 'Clothing' },
            { value: 'books', label: 'Books' }
        ],
        
        // Level 2 options by parent
        level2: {
            electronics: [
                { value: 'phones', label: 'Phones' },
                { value: 'laptops', label: 'Laptops' },
                { value: 'accessories', label: 'Accessories' }
            ],
            clothing: [
                { value: 'mens', label: "Men's Clothing" },
                { value: 'womens', label: "Women's Clothing" },
                { value: 'kids', label: "Kids' Clothing" }
            ],
            books: [
                { value: 'fiction', label: 'Fiction' },
                { value: 'nonfiction', label: 'Non-Fiction' },
                { value: 'textbooks', label: 'Textbooks' }
            ]
        },
        
        // Level 3 options by parent
        level3: {
            phones: [
                { value: 'iphone', label: 'iPhone' },
                { value: 'samsung', label: 'Samsung' },
                { value: 'google', label: 'Google Pixel' }
            ],
            laptops: [
                { value: 'macbook', label: 'MacBook' },
                { value: 'dell', label: 'Dell' },
                { value: 'hp', label: 'HP' }
            ],
            accessories: [
                { value: 'chargers', label: 'Chargers' },
                { value: 'cases', label: 'Cases' },
                { value: 'headphones', label: 'Headphones' }
            ],
            mens: [
                { value: 'shirts', label: 'Shirts' },
                { value: 'pants', label: 'Pants' },
                { value: 'shoes', label: 'Shoes' }
            ],
            womens: [
                { value: 'dresses', label: 'Dresses' },
                { value: 'tops', label: 'Tops' },
                { value: 'bottoms', label: 'Bottoms' }
            ],
            kids: [
                { value: 'toddler', label: 'Toddler' },
                { value: 'children', label: 'Children' },
                { value: 'teen', label: 'Teen' }
            ],
            fiction: [
                { value: 'mystery', label: 'Mystery' },
                { value: 'scifi', label: 'Science Fiction' },
                { value: 'romance', label: 'Romance' }
            ],
            nonfiction: [
                { value: 'biography', label: 'Biography' },
                { value: 'history', label: 'History' },
                { value: 'science', label: 'Science' }
            ],
            textbooks: [
                { value: 'math', label: 'Mathematics' },
                { value: 'english', label: 'English' },
                { value: 'science-text', label: 'Science' }
            ]
        }
    };


    // Compute options for level 2 based on level 1 selection
    let level2Options = $derived(
        $form.level1 ? (DATA.level2[$form.level1] || []) : []
    );
    
    // Compute options for level 3 based on level 2 selection
    let level3Options = $derived(
        $form.level2 ? (DATA.level3[$form.level2] || []) : []
    );
    
    // Auto-reset dependent fields when parent changes
    $effect(() => {
        if ($form.level1) {
            $form.level2 = '';
            $form.level3 = '';
        }
    });
    
    $effect(() => {
        if ($form.level2) {
            $form.level3 = '';
        }
    });



    function submit(e) {

        console.log("The form object is:",$form);

        console.log('Form submitted:', $form.data());
        alert(`Selected: ${$form.level1} > ${$form.level2} > ${$form.level3}`);



        e.preventDefault();

        if (isEdit) {

            console.log('trying to edit')

            $form.put(`/question/${question.id}`,{
                onSuccess: () => {
                    console.log("Updated successfully!");
                },
            });

        } else {

            console.log('trying to new')

            $form.post("/question", {
                onSuccess: () => {
                    console.log("Saved successfully!");
                    $form.reset();
                },
            });
        }
    }



















</script>

<Layout>
    <section class="section">
        <div class="container">

            <div class="fixed-grid has-2-cols">
            <div class="grid has-background-warning">
                <div class="cell">
                    <h1 class="title">{isEdit & question != null ? 'Edit Question' + question.id : 'Create Question'}</h1>
                </div>
                <div class="cell has-text-right"><a href="/question">Back</a></div>
            </div>
            </div>

            <form onsubmit={submit} class="box">







                <FormInput 
                    {form} 
                    name="myInput" 
                    label="Title (myInput)" 
                    placeholder="Enter a title"
                />



                <FormSelect 
                    {form} 
                    name="mySelect" 
                    label="Title (mySelect)" 
                    placeholder="Enter a title"
                    options={
                       [
                            { value: '1', label: 'Option 1' },
                            { value: '2', label: 'Option 2' },
                       ] 
                    } 
                />



                <FormRadio 
                    form={form} 
                    name="gender" 
                    label="Gender"
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' }
                    ]}
                />

                <FormCheckBoxSingle 
                    form={form} 
                    name="terms" 
                    label="I agree to the terms and conditions"
                />




                <FormCheckBoxGroup 
                    form={form} 
                    name="interests" 
                    label="Select your interests"
                    options={[
                        { value: 'coding', label: 'Coding' },
                        { value: 'design', label: 'Design' }
                    ]}
                />





                <FormDate 
                    form={form} 
                    name="birth_date" 
                    label="Date of Birth" 
                />



                <FormDateTime 
                    form={form} 
                    name="appointment_time" 
                    label="Appointment Date & Time" 
                />







    <FormUpload 
        {form} 
        name="documents" 
        label="Upload Documents (PDF, DOCX, TXT)"
        accept=".pdf,.docx,.doc,.txt,.png"
        multiple={true}
        maxSize={10}
        showPreview={false}
    />
















                        <div class="fixed-grid has-3-cols">


                            <div class="grid">



                                <div class="cell">
                                    <!-- Level 1: Main Category -->
                                    <FormSelect 
                                        {form} 
                                        name="level1" 
                                        label="Category"
                                        options={DATA.level1}
                                        placeholder="Select category"
                                        required={true}
                                    />
                                    
                                </div>


                                <div class="cell">

                                    <!-- Level 2: Subcategory -->
                                    <FormSelect 
                                        {form} 
                                        name="level2" 
                                        label="Subcategory"
                                        options={level2Options}
                                        placeholder={$form.level1 ? "Select subcategory" : "Select a category first"}
                                        disabled={!$form.level1}
                                        required={true}
                                    />
                                    
                                </div>




                                <div class="cell">
                                    <!-- Level 3: Item -->
                                    <FormSelect 
                                        {form} 
                                        name="level3" 
                                        label="Item"
                                        options={level3Options}
                                        placeholder={$form.level2 ? "Select item" : "Select a subcategory first"}
                                        disabled={!$form.level2}
                                        required={true}
                                    />
                                </div>





                            </div>




                        </div>
























                <div class="field">
                    <label class="label" for="ed">Content (text)</label>
                    <div class="control" id="ed">
                        <Editor onUpdate={(html) => ($form.text = html)} value={question != null ? question.text : ''}/>
                    </div>
                    {#if $form.errors.text}
                        <p class="help is-danger">{$form.errors.text}</p>
                    {/if}
                </div>

                <div class="control">
                    <button
                        type="submit"
                        class="button is-link"
                        disabled={$form.processing}
                    >

                        {#if ($form.processing)}
                            "Submitting ..."
                        {:else } 
                           {isEdit ? 'Update' : 'Create'} Question
                        {/if} 

                    </button>
                </div>

            </form>
        </div>
    </section>
</Layout>























<!-- 

<div>
    
    <form onsubmit={submit}>
        <div>
            <label for="title">Title</label>
            <input 
                id="title"
                type="text" 
                bind:value={form.title} 
                placeholder="Enter question title" 
            />
            {#if form.errors.title}
                <span class="error">{form.errors.title}</span>
            {/if}
        </div>
        
        <div>
            <label for="content">Content</label>
            <textarea 
                id="content"
                bind:value={form.content} 
                placeholder="Enter question content"
                rows="6"
            ></textarea>
            {#if form.errors.content}
                <span class="error">{form.errors.content}</span>
            {/if}
        </div>
        
        <button type="submit" disabled={form.processing}>
            {isEdit ? 'Update' : 'Create'} Question
        </button>
        
        <a href={isEdit ? `/question/${question.id}` : '/question'}>
            Cancel
        </a>
    </form>
</div> -->