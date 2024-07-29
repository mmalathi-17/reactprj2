import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from'./hidi.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>

<div className='container'>
    <div className='row'>
        <div className='col-md-6'>
            <h2>hello</h2>
            <p>Ancient manuscripts also divided sentences into paragraphs with line breaks (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. For additional ornamentation, a hedera leaf or other symbol can be added to the inter-paragraph white space, or put in the indentation space.</p>
        </div>
        <div className='col-md-6'>
            <h2>hello</h2>
            <p>Ancient manuscripts also divided sentences into paragraphs with line breaks (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. For additional ornamentation, a hedera leaf or other symbol can be added to the inter-paragraph white space, or put in the indentation space.</p>
        </div>
        </div>

        <div className='row'>
    
        <div className='col-md-3'>
            <p>Ancient manuscripts also divided sentences into paragraphs with line breaks (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. For additional ornamentation, a hedera leaf or other symbol can be added to the inter-paragraph white space, or put in the indentation space.</p>
        </div>
        <div className='col-md-6'>
        <img src={pic} alt=""className='img-fluid'/>
        </div>
        <div className='col-md-3'>
            <p>Ancient manuscripts also divided sentences into paragraphs with line breaks (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. For additional ornamentation, a hedera leaf or other symbol can be added to the inter-paragraph white space, or put in the indentation space.</p>
        </div>
        </div>
    
        <div className='row'>
            <div className='col-md-12 bg-dark'> <h1 className='text-danger'>copy righter@2024</h1>
               
            </div>
        </div>
    
</div>
 </>
)



